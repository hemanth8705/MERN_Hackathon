# 🍳LMS Project

## Project Structure

The project follows a well-organized structure:

```
LMS-Project/
├── backend/
│   ├── config/
│   │   ├── db.config.js 
│   ├── controllers/
│   │   ├── user.controller.js
│   │   ├── course.controller.js
│   │   ├── payment.controller.js
│   │   ├── miscellaneous.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   ├── multer.middleware.js
│   ├── models/
│   │   ├── user.model.js
│   │   ├── course.model.js
│   │   ├── payment.model.js
│   ├── routes/
│   │   ├── user.routes.js
│   │   ├── course.routes.js
│   │   ├── payment.routes.js
│   │   ├── miscellaneous.routes.js
│   ├── uploads/
│   ├── utils/
│   │   ├── error.utils.js
│   │   ├── sendEmail.js
│   ├── server.js
│   ├── app.js
│   ├── .env
│   ├── .env.example.js
│   ├── package.json
│
├── client/
│   ├── src/
│   │   ├── assests/
│   │   ├── components/
│   │   ├── helpers/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── Redux/ 
│   │   ├── App.jsx/
│   │   ├── index.css/
│   │   ├── main.jsx/
│   │   ├── ...
│   ├── .env
│   ├── .env.example.js
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   ├── ...
└──
```


## Features

- 💡 **User Authentication**: Sign up, log in, change password, and reset password via email.
- 🙋 **User Profile**: Edit profile details, view profile information.
- 📚 **Course Management**: Admin can create, edit, and delete courses.
- 📝 **Lecture Management**: Admin can add, edit, and delete lectures within courses.
- 🔒 **Subscription**: Users can enroll in courses by purchasing a 1-year subscription.
- 🎥 **Lecture Dashboard**: Display course lectures, play videos, and view lecture descriptions.


## Tech Stack

### Backend

- Node.js
- Express
- MongoDB
- Cors
- bcrypt
- Crypto
- Jsonwebtoken
- Dotenv
- Cookie-Parser
- Multer
- Cloudinary
- Nodemailer
- Razorpay

### Frontend

- **React :** `for creating ui`
- **Tailwind & CSS :** `for styling the element`
- **DaisyUi :** `for creating beautiful drawer`
- **React-Icons :** `for icons` 
- **React-Router :** `for make the different pages`
- **React-Slick :** `for create slider` 
- **React-hot-toast :** `for showing small small toast`
- **React-Redux :** `for use redux with react`
- **Redux Toolkit :** `for managing state in global app`
- **Chart.js :** `for showing chart for admin`
- **React-Chartjs-2 :** for showing chart for admin`

---

## Getting Started

Follow these steps to set up the project on your local machine:

1. Clone the repository:
   ```
   git clone https://github.com/hemanth8705/MERN_Hackathon.git
   cd LMS
   ```

2. Set up the backend:
   - Navigate to the `backend` folder.
   - Install dependencies: `npm install`
   - Set up environment variables: Create a `.env` file based on `.env.example.js` file.
   - Start the backend server: `npm start`

3. Set up the frontend:
   - Navigate to the client folder: `cd client`
   - Install dependencies: `npm install`
   - Set up environment variables: Create a `.env` file based on `.env.example.js` file.
   - Start the client development server: `npm run dev`

4. Access the application:
   - Open your browser and visit: `http://localhost:5173`

---

_Made with ❤️ by [Terli Hemanth] (https://in.linkedin.com/in/hemanth-terli-a50857271)_
