import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaHome, FaUsersCog, FaBookMedical, FaInfoCircle, FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Redux/Slices/AuthSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const { isLoggedIn, role } = useSelector((state) => state.auth);
  
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const element = document.querySelector("html");
    element.classList.remove("light", "dark");
    if (darkMode) {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 md:h-[72px] h-[65px] md:px-[35px] px-[15px] bg-[#ffffffd0] dark:bg-[#21242bc5] shadow-custom backdrop-blur-md flex justify-between items-center">
      {/* Left side - Navigation Links */}
<div className="flex items-center gap-6">
  <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-500 transition-all duration-200 flex items-center gap-2">
    <FaHome className="text-xl" />
    Home
  </Link>
  {role === "ADMIN" && (
    <>
      <Link to="/admin/dashboard" className="text-gray-700 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-500 transition-all duration-200 flex items-center gap-2">
        <FaUsersCog className="text-xl" />
        Admin Dashboard
      </Link>
      <Link to="/course/create" className="text-gray-700 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-500 transition-all duration-200 flex items-center gap-2">
        <FaBookMedical className="text-xl" />
        Create Course
      </Link>
    </>
  )}
  <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-500 transition-all duration-200 flex items-center gap-2">
    <FaInfoCircle className="text-xl" />
    About Us
  </Link>
  <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-500 transition-all duration-200 flex items-center gap-2">
    <FaPhoneAlt className="text-xl" />
    Contact Us
  </Link>
</div>
      
      {/* Right side - Auth buttons and Theme toggle */}
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
          <Link to="/user/profile">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1.5 rounded-md font-semibold transition-all duration-200 flex items-center gap-2">
              <FaUserCircle className="text-xl" />
              Profile
            </button>
          </Link>
          <button
            onClick={() => dispatch(logout())}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md font-semibold transition-all duration-200"
          >
            Logout
          </button>
        </div>
        ) : (
          <div className="flex gap-4">
            <Link to="/login">
              <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white px-4 py-1 rounded-md font-semibold transition-all duration-200">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1.5 rounded-md font-semibold transition-all duration-200">
                Sign Up
              </button>
            </Link>
          </div>
        )}
  
        <button className="p-2 rounded-full text-lg" onClick={toggleDarkMode}>
          {darkMode ? (
            <FaSun size={24} className="text-white" />
          ) : (
            <FaMoon size={24} className="text-gray-900" />
          )}
        </button>
      </div>
    </nav>
  );
}