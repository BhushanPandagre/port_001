import React from "react";
import { PrimaryBtn } from "../..";
import Repair from "../../../assets/repair.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmployeeSalaryManagementRepair = () => {
  return (
    <div className="min-h-screen w-full bg-[#0f0f0f] flex flex-col md:flex-row items-center justify-center px-6 py-12">
      {/* Image */}
      <div className="flex justify-center items-center max-w-sm md:max-w-md mb-10 md:mb-0">
        <img
          src={Repair}
          alt="Employee Salary Management Under Construction"
          className="w-full max-h-[300px] object-contain drop-shadow-xl"
        />
      </div>

      {/* Divider */}
      <div className="w-24 h-1 md:w-1 md:h-32 bg-primary mx-0 md:mx-8 my-6 md:my-0 rounded-full"></div>

      {/* Message & Button */}
      <div className="flex flex-col items-center text-center max-w-lg space-y-6 animate-fade-in-up">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-200">
          🚧 This project is currently under construction
        </h2>
        <p className="text-base sm:text-lg text-neutral-400">
          Please check out the GitHub repository for the complete Employee Salary Management source code and updates.
        </p>

        <Link to="https://github.com/BhushanPandagre/port_001" target="_blank" rel="noopener noreferrer">
          <PrimaryBtn className="flex items-center gap-3 px-6 py-3 text-lg font-medium">
            <span>View on GitHub</span>
            <FaGithub size={20} />
          </PrimaryBtn>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeSalaryManagementRepair;
