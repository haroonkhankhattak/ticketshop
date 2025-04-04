import React, { useState } from "react";
import { Search, Check } from "lucide-react";
import TrustPilotRow from "../components/TrustpilotRow";



const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (

    <main>
      <TrustPilotRow />
      <div className="w-full relative">

        {/* Hero Background Image */}
        <div
          className="w-full h-[60vh] min-h-[300px] bg-cover bg-center relative"

          style={{
            backgroundImage: `url('/uploads/monochrome-soccer-fans-cheering.jpg')`,
            backgroundPosition: "50% 30%",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
            <h1 className="font-dosis text-4xl font-bold mb-6">
              Be part of the live action!
            </h1>
            <p className="text-xl md:text-xl font-bold mb-8">
              Score tickets fast & safe on the most trusted platform
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-2xl relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for team, match, stadium or city"
                className="w-full py-2 px-5 pr-12 rounded-md text-black text-lg focus:outline-none"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="bg-white py-4 text-center">
          <div className="flex justify-center items-center text-green-600">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span className="font-medium">
              All our orders are 150% guaranteed
            </span>
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
        </div>


      </div>
    </main>

  );
};

export default Hero;
