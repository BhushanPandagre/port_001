

import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      {/* Heading */}
      <motion.div
        className="mb-10"
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, type: "spring" },
        }}
      >
        <h3 className="text-neutral text-center">Something About Myself</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          About <span className="text-primary">Me</span>
        </h1>
        <BottomLine />
      </motion.div>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 1.25 },
          }}
          className="flex justify-center"
        >
          <img
            src="https://res.cloudinary.com/djogbntnb/image/upload/v1745226383/PORTFOLIO%20AVATAR/agzaksottzhfy9gdy0x3.jpg"
            alt="Gilbert Hutapea"
            className="w-[300px] h-[300px] rounded-full object-cover shadow-lg"
            title="Gilbert Hutapea"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 1.25 },
          }}
        >
          <h1 className="text-4xl font-semibold mb-4 text-center md:text-left">
            Bhushan Pandagre
          </h1>

          <TypeAnimation
            className="text-2xl text-primary font-bold text-center md:text-left mb-4"
            cursor={true}
            sequence={[
              "A Mern-stack Developer",
              2000,
              "A Full-stack Developer",
              2000,
              "A Front-end Developer",
              2000,
            ]}
            wrapper="div"
            repeat={Infinity}
          />

          <p className="text-neutral font-medium text-justify mb-4">
            As a MERN stack developer, I am committed to building high-quality
            web applications that meet the needs of my clients. With years of
            experience in full-stack web development, I specialize in using
            React.js, Next.js, Typescript, MongoDB, Express.js, and Node.js to
            create scalable and robust web applications.
          </p>
          <p className="text-neutral font-medium text-justify mb-4">
            My passion for solving complex problems and creating innovative
            solutions drives me to stay up-to-date with the latest
            technologies and trends in the industry.
          </p>

          {/* Personal Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-3 mb-6 text-sm md:text-base">
            <h2>
              <span className="font-medium text-primary">Name:</span> Bhushan Pandagre
            </h2>
            <h2>
              <span className="font-medium text-primary">Phone:</span> +91 8839093270
            </h2>
            <h2>
              <span className="font-medium text-primary">Email:</span> pandagrebhushan3@gmail.com
            </h2>
            <h2>
              <span className="font-medium text-primary">Address:</span> Nanda Nagar Indore 
            </h2>
          </div>

          {/* Resume Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1hrpCpHSg7fEEL9rLsdg72hQ9etpXwmDp/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="primary-button">
                <span>My Resume</span>
                <span>
                  <FaDownload />
                </span>
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;

