import React from "react";
import profile from "../assets/my-profile.jpeg";
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJs } from "react-icons/fa";

const About = () => {
  return (
    <section className="min-h-screen p-10 bg-white flex flex-col md:flex-row items-center gap-10">
      
      {/* Left - Profile Image */}
      <div className="md:w-1/3 flex justify-center">
        <img 
          src={profile} 
          alt="Muhammad Saad" 
          className="w-64 h-64 rounded-full border-4 border-blue-600 object-cover"
        />
      </div>

      {/* Right - Text Content */}
      <div className="md:w-2/3 space-y-6">
        
        {/* 1. Intro / Heading */}
        <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
        <p className="text-lg text-gray-700 font-semibold">
          Passionate MERN Stack Developer with 5 months of experience building web apps.
        </p>

        {/* 2. Profile / Story */}
        <p className="text-lg text-gray-700">
          I am Muhammad Saad, a MERN Stack Developer passionate about building efficient 
          and scalable web applications. I love learning new technologies and continuously 
          improving my skills. My goal is to contribute to innovative projects and grow 
          as a professional developer while creating solutions that make a real impact.
        </p>

        {/* 3. Skills Highlights / Badges */}
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <FaReact className="text-blue-500"/> React
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <FaNodeJs className="text-green-600"/> Node.js
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <FaDatabase className="text-gray-800"/> MongoDB
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <FaCss3Alt className="text-blue-600"/> TailwindCSS
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <FaJs className="text-yellow-500"/> JavaScript
          </div>
        </div>

        {/* 4. Experience / Achievements */}
        <div className="mt-6 space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Experience / Achievements</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Built 3 full-stack web applications using MERN.</li>
            <li>Deployed projects on Netlify / Vercel.</li>
          </ul>
        </div>

        {/* 5. Call-to-action / Contact */}
        <a 
          href="/contact" 
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Hire Me / Contact Me
        </a>

      </div>

    </section>
  );
};

export default About;
