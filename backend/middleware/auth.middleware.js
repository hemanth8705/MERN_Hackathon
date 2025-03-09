import AppError from "../utils/error.utils.js";
import jwt from "jsonwebtoken";
import userModel from '../models/user.model.js';

const isLoggedIn = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return next(new AppError("Unauthenticated, please login again", 401));
        }

        const userDetails = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = userDetails;

        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return next(new AppError("Token expired, please login again", 401));
        }
        return next(new AppError("Invalid token, please login again", 401));
    }
};

// authorised roles
const authorisedRoles = (...roles) => async (req, res, next) => {
    const currentUserRoles = req.user.role;
    if (!roles.includes(currentUserRoles)) {
        return next(new AppError("You do not have permission to access this routes", 403))
    }
    next();
}

const authorizeSubscriber = async (req, res, next) => {
    const {role, id} = req.user; 
    const user = await userModel.findById(id);
    const subscriptionStatus = user.subscription.status;
    if (role !== 'ADMIN' && subscriptionStatus !== 'active') {
        return next(
            new AppError('Please subscribce to access this route!', 403)
        )
    }

    next();
}

export {
    isLoggedIn,
    authorisedRoles,
    authorizeSubscriber
}