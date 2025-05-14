
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiPalette } from "react-icons/bi";
import { DiAtom } from "react-icons/di";
import { FiServer } from "react-icons/fi";
import { headingAnimation, sectionBodyAnimation } from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

const Service = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const services = [
    {
      id: 1,
      title: "Front End Development",
      icon: <DiAtom />,
      description: "Develop responsive and interactive user interfaces using React, Tailwind, and modern UI libraries.",
    },
    {
      id: 2,
      title: "MERN Stack Development",
      icon: <FiServer />,
      description: "Build complete web applications using MongoDB, Express.js, React, and Node.js.",
    },
    {
      id: 3,
      title: "Web Design",
      icon: <BiPalette />,
      description: "Design static, responsive websites using HTML, CSS, Bootstrap, and Tailwind CSS.",
    },
  ];

  return (
    <div className="py-20 parent">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={controls}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">What I Provide</h3>
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Services</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate={controls}
        variants={sectionBodyAnimation}
      >
        {services.map(({ id, title, icon, description }) => (
          <div
            key={id}
            className={`rounded-lg p-6 duration-300 cursor-pointer hover:shadow-primary ${
              id % 2 === 0 ? "bg-accent shadow-lg" : "bg-[#313131] shadow-md"
            }`}
          >
            <div className="mb-4 text-center text-5xl text-primary">
              {icon}
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">{title}</h2>
            <p className="text-neutral text-center">{description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
