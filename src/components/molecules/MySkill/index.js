

import React from "react";
import Lottie from "lottie-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaCode,
  FaTools, // for Insomnia icon
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiAdobephotoshop,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiCplusplus,
  SiVite,
  SiPostman,  // Postman icon
} from "react-icons/si";
import man from "../../../assets/man.json";

const MySkill = () => {
  const skills = {
    Languages: [
      { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { title: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
      { title: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { title: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
      { title: "C++", icon: <SiCplusplus className="text-blue-600" /> },
      { title: "DSA", icon: <FaCode className="text-purple-600" /> },
    ],
    "Libraries & Frameworks": [
      { title: "React", icon: <FaReact className="text-cyan-400" /> },
      { title: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
      { title: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { title: "ExpressJS", icon: <SiExpress className="text-neutral-300" /> },
      { title: "Vite", icon: <SiVite className="text-green-500" /> },
    ],
    "Tools & Technologies": [
      { title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { title: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
      { title: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { title: "GitHub", icon: <FaGithub className="text-white" /> },
      { title: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { title: "Photoshop", icon: <SiAdobephotoshop className="text-cyan-700" /> },
      { title: "Postman", icon: <SiPostman className="text-orange-500" /> }, 
      { title: "Insomnia", icon: <FaTools className="text-pink-500" /> }, // Alternative icon for Insomnia
    ],
  };

  return (
    <section className="pt-24 px-6 md:px-16 bg-[#1e1e1e] text-white mt-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
        My <span className="text-primary">Skills</span>
      </h1>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-2/3">
          {Object.entries(skills).map(([category, skillSet]) => (
            <div key={category} className="mb-10">
              <h2 className="text-xl text-primary font-semibold mb-4">{category}</h2>
              <div className="flex flex-wrap gap-4">
                {skillSet.map(({ title, icon }) => (
                  <div
                    key={title}
                    title={title}
                    className="flex flex-col items-center justify-center text-center gap-2"
                  >
                    <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-[#2a2a2a] hover:bg-[#353535] shadow-md hover:shadow-primary transition duration-300 cursor-pointer text-3xl">
                      {icon}
                    </div>
                    <p className="text-sm text-neutral-400">{title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Animation */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Lottie
            animationData={man}
            loop
            autoplay
            className="w-[280px] md:w-[360px] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MySkill;


