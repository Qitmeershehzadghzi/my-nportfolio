import React from 'react'
import profile from '../assets/my-profile.jpeg'
import { Link } from 'react-router-dom';
import cv from '../assets/my new cv.pdf'

const Home = () => {
  return (
 <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-50 min-h-screen">
      
      {/* Left Side - Text */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl font-bold text-gray-800">
          Muhammad Saad
        </h1>
        <h2 className="text-2xl text-blue-600 font-semibold">
          MERN Stack Developer
        </h2>
        <p className="text-lg text-gray-700">
          Building dynamic web applications with React, Node, and MongoDB.
        </p>
       <div className="mt-6">
        <a
        href={cv}
        download="my new cv.pdf" // Download hone par file ka name
        className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-200 ease-in-out"
      >
        Hire me!
      </a>
      <a href="/projects" alt='projects'>projects</a>
    </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img 
          src={profile} 
          alt="Muhammad Saad" 
          className="w-64 h-64 rounded-full border-4 border-blue-600 object-cover"
        />
      </div>

    </section>
  );  
}

export default Home