
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
          <div className="p-6 bg-[#1e1e1e] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl w-[320px] hover:shadow-primary transition duration-300 group cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-bold text-primary group-hover:underline">
                Diploma in Mould Technology
              </h3>
              <p className="text-sm text-neutral-400 font-medium">2017 – 2020</p>
            </div>
            <p className="text-sm text-neutral-300 text-justify leading-relaxed">
              Successfully completed at <span className="text-amber-400 font-semibold">CIPET Bhopal</span>, specializing in precision mould design, tooling systems, and advanced manufacturing techniques. Built a strong foundation in engineering design, CAD/CAM, and production workflows.
            </p>
          </div>



          {/* B.Tech */}
          <div className="my-6 md:ml-[200px] p-6 bg-[#1e1e1e] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl w-[320px] hover:shadow-primary transition duration-300 group cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-bold text-primary group-hover:underline">
                B.Tech in Computer Science
              </h3>
              <p className="text-sm text-neutral-400 font-medium">2020 – 2023</p>
            </div>
            <p className="text-sm text-neutral-300 text-justify leading-relaxed">
              Graduated from <span className="text-amber-400 font-semibold">Madhyanchal Professional University, Bhopal</span>, focusing on software engineering, data structures, algorithms, and full-stack development. Gained hands-on experience in designing scalable web applications and solving real-world technical challenges.
            </p>
          </div>


          {/* MERN Stack Course */}
          <div className="mb-6 p-6 bg-gradient-to-br from-[#2c2c2c] to-[#1e1e1e] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl md:ml-0 w-[320px] hover:shadow-primary transition duration-300 group cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-bold text-primary group-hover:underline">
                MERN Stack Development
              </h3>
              <p className="text-sm text-neutral-400 font-medium">2023 – 2024</p>
            </div>
            <p className="text-sm text-neutral-300 text-justify leading-relaxed">
              Completed a hands-on, project-based training at <span className="text-amber-400 font-semibold">Cybrom Institute of Technology, Bhopal</span>. Gained in-depth expertise in MongoDB, Express.js, React.js, and Node.js by building real-world full-stack applications.
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Education;

