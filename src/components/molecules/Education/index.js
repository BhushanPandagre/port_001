


import React from "react";
import Lottie from "lottie-react";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Animation */}
        <div>
          <Lottie
            animationData={readingBook}
            loop
            autoplay
            style={{ width: "90%", height: "70%" }}
            className="mx-auto lg:mr-auto"
          />
        </div>

        {/* Education Cards */}
        <div className="mx-auto lg:ml-auto">
          {/* Diploma */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Diploma in Mould Technology
              </h3>
              <p className="text-sm text-neutral font-semibold">2017 - 2020</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Completed from <b>CIPET Bhopal</b>, focused on precision mould design and manufacturing techniques.
            </p>
          </div>

          {/* B.Tech */}
          <div className="my-6 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">B.Tech in CSE</h3>
              <p className="text-sm text-neutral font-semibold">2020 - 2023</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Graduated from <b>Madhyanchal Professional University, Bhopal</b>, specializing in Computer Science and Engineering.
            </p>
          </div>

          {/* MERN Stack Course */}
          <div className="mb-6 p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg md:ml-0 w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                MERN Stack Development
              </h3>
              <p className="text-sm text-neutral font-semibold">2023 - 2024</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Completed at <b>Cybrom Institute of Technology, Bhopal</b>. Covered MongoDB, Express.js, React.js, and Node.js in depth.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;

