// import React from "react";
// import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   const year = new Date();

//   return (
//     <>
//       <footer
//         className="w-full text-center p-6 bg-accent"
//         style={{ backgroundColor: "#313131" }}
//       >
//         <div className="flex items-center justify-center mb-6">
//           <a
//             className="inline-block mx-2"
//             href="https://x.com/Bhushan12364318"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaTwitter className="text-2xl text-blue-600" />
//           </a>
//           <a
//             className="inline-block mx-2"
//             href="https://www.linkedin.com/in/bhushan-pandagre"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin className="text-2xl text-blue-400" />
//           </a>
//           <a
//             className="inline-block mx-2"
//             href="https://github.com/BhushanPandagre"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaGithub className="text-2xl text-black" />
//           </a>
//           <a
//             className="inline-block mx-2"
//             href="https://www.instagram.com/bhushanpandagre"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaInstagram className="text-2xl text-pink-500" />
//           </a>
//         </div>
//         <div className="hidden  md:flex items-center justify-center mb-6 flex-wrap">

//           <a
//             className="text-xl inline-bloc mx-6 text-neutral"
//             href="https://www.upwork.com/freelancers/~01e14e5246b7939a1a?viewMode=1"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             UpWork
//           </a>

//           <a
//             className="text-xl inline-bloc mx-6 text-neutral"
//             href="https://drive.google.com/file/d/1hrpCpHSg7fEEL9rLsdg72hQ9etpXwmDp/view?usp=drive_link"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Resume
//           </a>
//         </div>

//         <div className="w-full h-[2px] bg-gray-600"></div>
//         <div className="flex flex-col md:flex-row items-center justify-between mt-4">
//           <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
//           <p>
//             Developed by{" "}
//             <a
//               href="https://www.linkedin.com/in/bhushan-pandagre"
//               className="text-primary hover:underline"
//               target="blank"
//             >
//               Bhushan Pandagre
//             </a>
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;




import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1f1f1f] text-neutral-300 py-8 px-6">
      {/* Social Icons */}
      <div className="flex justify-center mb-6 space-x-6">
        <a
          href="https://x.com/Bhushan12364318"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/bhushan-pandagre"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/BhushanPandagre"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.instagram.com/bhushanpandagre"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>
      </div>

      {/* Links (UpWork & Resume) */}
      <div className="hidden md:flex justify-center mb-6 space-x-12 text-lg font-medium">
        <a
          href="https://www.upwork.com/freelancers/~01e14e5246b7939a1a?viewMode=1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors duration-300"
        >
          UpWork
        </a>
        <a
          href="https://drive.google.com/file/d/1hrpCpHSg7fEEL9rLsdg72hQ9etpXwmDp/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors duration-300"
        >
          Resume
        </a>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-700 my-4" />

      {/* Copyright and Author */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
        <p className="mb-2 md:mb-0">&copy; {year} All Rights Reserved</p>
        <p>
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/bhushan-pandagre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Bhushan Pandagre
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
  