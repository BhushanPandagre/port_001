
// import React, { useEffect, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { BiPalette } from "react-icons/bi";
// import { DiAtom } from "react-icons/di";
// import { FiServer } from "react-icons/fi";
// import { headingAnimation, sectionBodyAnimation } from "../../../hooks/useAnimation";
// import { BottomLine } from "../../../components";

// const Service = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [inView, controls]);

//   const services = [
//     {
//       id: 1,
//       title: "Front End Development",
//       icon: <DiAtom />,
//       description: "Develop responsive and interactive user interfaces using React, Tailwind, and modern UI libraries.",
//     },
//     {
//       id: 2,
//       title: "MERN Stack Development",
//       icon: <FiServer />,
//       description: "Build complete web applications using MongoDB, Express.js, React, and Node.js.",
//     },
//     {
//       id: 3,
//       title: "Web Design",
//       icon: <BiPalette />,
//       description: "Design static, responsive websites using HTML, CSS, Bootstrap, and Tailwind CSS.",
//     },
//   ];

//   return (
//     <div className="py-20 parent">
//       <motion.div
//         className="mb-12"
//         initial="hidden"
//         animate={controls}
//         variants={headingAnimation}
//       >
//         <h3 className="text-center text-neutral">What I Provide</h3>
//         <h1 className="text-4xl font-semibold text-center">
//           My <span className="text-primary">Services</span>
//         </h1>
//         <BottomLine />
//       </motion.div>

//       <motion.div
//         ref={ref}
//         className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
//         initial="hidden"
//         animate={controls}
//         variants={sectionBodyAnimation}
//       >
//         {services.map(({ id, title, icon, description }) => (
//           <div
//             key={id}
//             className={`rounded-lg p-6 duration-300 cursor-pointer hover:shadow-primary ${
//               id % 2 === 0 ? "bg-accent shadow-lg" : "bg-[#313131] shadow-md"
//             }`}
//           >
//             <div className="mb-4 text-center text-5xl text-primary">
//               {icon}
//             </div>
//             <h2 className="mb-4 text-2xl font-semibold text-center">{title}</h2>
//             <p className="text-neutral text-center">{description}</p>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Service;



import React, { useEffect } from "react";
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
      description: "Crafting beautiful, fast, and accessible interfaces using React, Tailwind CSS, and modern tools.",
    },
    {
      id: 2,
      title: "MERN Stack Development",
      icon: <FiServer />,
      description: "End-to-end app development with MongoDB, Express.js, React, and Node.js — full-stack power.",
    },
    {
      id: 3,
      title: "Web Design",
      icon: <BiPalette />,
      description: "Designing sleek and responsive static sites using HTML, CSS, Bootstrap, and Tailwind CSS.",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto parent">
      {/* Header */}
      <motion.div
        className="mb-16 text-center"
        initial="hidden"
        animate={controls}
        variants={headingAnimation}
      >
        <h3 className="text-lg text-neutral tracking-wider uppercase">What I Provide</h3>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2">
          My <span className="text-primary">Services</span>
        </h1>
        <BottomLine />
      </motion.div>

      {/* Services */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionBodyAnimation}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map(({ id, title, icon, description }) => (
          <div
            key={id}
            className="group rounded-3xl bg-white/5 backdrop-blur-lg p-8 shadow-md hover:shadow-xl border border-white/10 hover:border-primary transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex justify-center items-center text-primary text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <h2 className="text-2xl font-semibold text-center text-white mb-4">
              {title}
            </h2>
            <p className="text-neutral-300 text-center leading-relaxed">{description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
