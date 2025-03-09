import paymentModel from '../models/payment.model.js'
import userModel from "../models/user.model.js";
import AppError from "../utils/error.utils.js";
import { razorpay } from "../server.js";
import crypto from 'crypto';

export const getRazorPayApiKey = async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            message: "Razorpay API Key",
            key: process.env.RAZORPAY_KEY_ID
        })
    } catch (e) {
        return next(new AppError(e.message, 500))
    }

}

export const buySubscription = async (req, res, next) => {
    try {
        const { id } = req.user;
        const user = await userModel.findById(id);

        if (!user) {
            return next(new AppError("User not found", 404));
        }

        if (user.role === "ADMIN") {
            return next(new AppError("Admin cannot purchase subscription", 400));
        }

        // Generate a shorter receipt ID
        const receiptId = `rcpt_${Math.random().toString(36).substring(2, 10)}`;

        const options = {
            amount: 499 * 100, // amount in paisa (499 INR)
            currency: "INR",
            receipt: receiptId, // shorter receipt ID
            notes: {
                userId: id
            }
        };

        const order = await razorpay.orders.create(options);

        user.subscription.id = order.id;
        user.subscription.status = 'created';
        
        await user.save();

        res.status(200).json({
            success: true,
            message: "Order Created Successfully",
            subscription_id: order.id,
            order_amount: order.amount
        });
    } catch (error) {
        console.log("Subscription error:", error);
        return next(new AppError(error.message || "Could not create order", 500));
    }
};

export const verifySubscription = async (req, res, next) => {
    try {
        const { id } = req.user;
        const { razorpay_payment_id, razorpay_signature, razorpay_order_id } = req.body;

        const user = await userModel.findById(id);
        if (!user) {
            return next(new AppError('Unauthorised, please login', 401));
        }

        const generatedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest('hex');

        if (generatedSignature !== razorpay_signature) {
            return next(new AppError("Payment verification failed", 400));
        }

        await paymentModel.create({
            razorpay_payment_id,
            razorpay_signature,
            razorpay_subscription_id: razorpay_order_id
        });

        user.subscription.status = 'active';
        await user.save();

        res.status(200).json({
            success: true,
            message: "Payment Verified Successfully"
        });
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
};

export const cancelSubscription = async (req, res, next) => {
    const { id } = req.user;

    const user = await userModel.findById(id);

    if (user.role === 'ADMIN') {
        return next(
            new AppError('Admin does not need to cannot cancel subscription', 400)
        );
    }

    const subscriptionId = user.subscription.id;

    try {
        const subscription = await razorpay.subscriptions.cancel(
            subscriptionId
        );

        user.subscription.status = subscription.status;

        await user.save();
    } catch (error) {
        return next(new AppError(error.error.description, error.statusCode));
    }
}

export const allPayments = async (req, res, next) => {
    try {
        const { count } = req.query;

        const subscriptions = await razorpay.subscriptions.all({
            count: count || 10,
        });

        res.status(200).json({
            success: true,
            message: 'All Payments',
            allPayments: subscriptions
        });
    } catch (e) {
        return next(new AppError(e.message, 500));
    }
};
