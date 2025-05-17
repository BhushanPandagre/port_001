// import React from "react";
// import { PrimaryBtn } from "../../../components";
// import Repair from "../../../assets/repair.png"
// import { FaGithub } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const MernBlogRepair = () => {
//     return (
//         <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center">
//             <div className="min-h-screen flex justify-center items-center">
//                 <img src={Repair} alt="MERN BLOG" className="w-70 h-70" />
//             </div>
//             <div className="w-24 h-1 md:w-1 md:h-32 bg-primary my-6 md:my-0 md:mx-8 "></div>
//             <div className="flex flex-col items-center translate-y-[-150%] sm:translate-y-[-0%]">
//                 <h2 className="text-2xl text-center mb-4">
//                     Sorry, the website is currently under construction, <br /> please visit github for the MERN BLOG repository
//                 </h2>
//                 <Link to="https://github.com/BhushanPandagre/port_001">
//                     <PrimaryBtn className="translate-y-[70%] sm:translate-y-[-0%]">
//                         <span>Go To Github MERN BLOG</span>
//                         <span>
//                             <FaGithub></FaGithub>
//                         </span>
//                     </PrimaryBtn>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default MernBlogRepair;



import React from "react";
import { PrimaryBtn } from "../../../components";
import Repair from "../../../assets/repair.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const MernBlogRepair = () => {
    return (
        <section className="min-h-screen w-full bg-[#1e1e1e] flex items-center justify-center px-6 py-10">
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
                
                {/* Image */}
                <div className="flex-shrink-0">
                    <img
                        src={Repair}
                        alt="MERN Blog Under Construction"
                        className="w-[280px] md:w-[360px] h-auto object-contain drop-shadow-xl"
                    />
                </div>

                {/* Divider */}
                <div className="w-full h-[2px] md:h-[180px] md:w-[2px] bg-primary" />

                {/* Message + Button */}
                <div className="text-center md:text-left max-w-md">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-relaxed">
                        🚧 The MERN Blog is currently under construction.
                        <br />
                        Please visit the GitHub repository for source code and updates.
                    </h2>
                    <Link to="https://github.com/BhushanPandagre/port_001" target="_blank" rel="noopener noreferrer">
                        <PrimaryBtn className="mt-4 px-6 py-3">
                            <span>View on GitHub</span>
                            <FaGithub className="ml-2" />
                        </PrimaryBtn>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MernBlogRepair;
