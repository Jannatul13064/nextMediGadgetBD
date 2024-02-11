import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        About MediGadget BD
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {/* Managing Director Card */}
        <div className="p-4 border rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img
              className="w-20 h-20 rounded-full mr-4"
              src="https://i.ibb.co/dGWg3mC/1704964605827.jpg"
              alt="Managing Director"
            />
            <div>
              <h2 className="text-xl font-bold">Managing Director</h2>
              <p className="text-gray-600">Tanjum Mostafa</p>
            </div>
          </div>
          <p className="text-gray-700">
            Tanjum Mostafa is the Managing Director of MediGadget BD.
          </p>
        </div>

        {/* CEO & Technical Head Card */}
        <div className="p-4 border rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img
              className="w-20 h-20 rounded-full mr-4"
              src="https://i.ibb.co/JtYgYcw/Untitled-13.jpg"
              alt="CEO & Technical Head"
            />
            <div>
              <h2 className="text-xl font-bold">CEO & Technical Head</h2>
              <p className="text-gray-600">Jannatul Islam</p>
            </div>
          </div>
          <p className="text-gray-700">
            Jannatul Islam serves as the CEO & Technical Head of MediGadget BD.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
