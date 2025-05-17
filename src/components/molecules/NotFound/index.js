// import React from "react";
// import { PrimaryBtn } from "../../../components";
// import { FaHome } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const NotFound = () => {
//   return (
//     <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center">
//       <h1 className="text-[8rem] font-bold text-primary animate-bounce">404</h1>
//       <div className="w-24 h-1 md:w-1 md:h-24 bg-primary my-6 md:my-0 md:mx-8"></div>
//       <div className="flex flex-col items-center">
//         <h2 className="text-2xl text-center mb-4">
//           Sorry, This page isn't available
//         </h2>
//         <Link to="/">
//           <PrimaryBtn>
//             <span>Go To HomePage</span>
//             <span>
//               <FaHome></FaHome>
//             </span>
//           </PrimaryBtn>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NotFound;



import React from "react";
import { PrimaryBtn } from "../../../components";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#1e1e1e] px-6">
      {/* Big 404 Text with gradient and shadow */}
      <h1
        className="text-[10rem] md:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500
                   animate-pulse select-none drop-shadow-lg"
        aria-label="404 Error"
      >
        404
      </h1>

      {/* Separator line */}
      <div className="w-24 h-1 md:w-1 md:h-48 bg-gradient-to-b from-primary to-orange-500 my-6 md:my-0 md:mx-12 rounded-full shadow-lg"></div>

      {/* Message & Button */}
      <div className="flex flex-col items-center max-w-sm text-center space-y-6">
        <h2 className="text-3xl font-semibold text-white">
          Oops! This page isn&apos;t available.
        </h2>
        <p className="text-neutral-400 text-sm md:text-base">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>

        <Link to="/">
          <PrimaryBtn className="flex items-center gap-3 px-6 py-3 text-lg font-medium transition-transform hover:scale-105">
            <FaHome className="text-xl" />
            <span>Go To Homepage</span>
          </PrimaryBtn>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
