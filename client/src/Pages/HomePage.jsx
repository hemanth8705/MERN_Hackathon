import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import heroImage1 from "../assets/images/codegnan_logo.png";
import heroImage2 from "../assets/images/pvpsit_logo.png";

export default function HomePage() {
  // Add state to toggle between images
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroImage1, heroImage2];

  // Function to switch images
  const toggleImage = () => {
    setCurrentImage((prev) => (prev === 0 ? 1 : 0));
  };
  return (
    <Layout>
      <section className="md:py-10 py-7 mb-10 text-white flex md:flex-row flex-col-reverse items-center justify-center md:gap-10 gap-7 md:px-16 px-6 min-h-[85vh]">
      <div className="md:w-1/2 w-full space-y-7">
        <div className="animate-fade-in">
          <h1 className="md:text-5xl text-6xl font-semibold text-gray-900 dark:text-gray-200 leading-tight">
            Find out best
            <br />
            <span className="text-yellow-500 font-bold font-open-sans animate-slide-up">
              Online Courses
            </span>
          </h1>
        </div>
          <p className="text-xl text-gray-500 dark:text-gray-300 font-inter">
            We have a large library of courses taught by highly skilled and
            qualified faculties at a very affordable cost.
          </p>

          <div className="space-x-6 flex">
            <Link to="/courses">
              <button className="bg-yellow-500 font-inter font-[400] text-slate-100 dark:text-gray-950 md:px-5 px-3 md:py-3 py-3 rounded-md  md:text-lg text-base cursor-pointer transition-all ease-in-out duration-300">
                Explore courses
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-yellow-500 text-gray-700 dark:text-white px-5 py-3 rounded-md font-semibold md:text-lg text-base cursor-pointer  transition-all ease-in-out duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 w-1/7 flex items-center justify-center">
        <img 
            alt="homepage image" 
            src={images[currentImage]}
            onClick={toggleImage}
            className="cursor-pointer transition-all duration-500" 
          />
        </div>
      </section>
    </Layout>
  );
}
