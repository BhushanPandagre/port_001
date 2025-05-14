
import React, { useEffect, useState } from "react";
import Items from "../../Utils/Items";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./Project.css";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../hooks/useAnimation";
import { BottomLine } from "../../components";

const Project = () => {
  const location = useLocation();
  const [activeBtn, setActiveBtn] = useState("all");
  const [items, setItems] = useState([]);
  const [ref, inView] = useInView();
  const animation = useAnimation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    // Initial filter based on route
    const filtered = getFilteredItems(activeBtn);
    setItems(isHome ? filtered.slice(0, 3) : filtered);
  }, [activeBtn, location.pathname]);

  const getFilteredItems = (category) => {
    if (category === "all") return Items;
    return Items.filter((item) => item.category === category);
  };

  return (
    <div className={`${!isHome && "pt-16"}`}>
      <div className="parent py-12">
        <motion.div
          initial="hidden"
          animate={inView && "visible"}
          variants={headingAnimation}
        >
          <div className="mb-12">
            <h3 className="text-neutral text-center">
              Some of my recent Projects
            </h3>
            <h1 className="text-4xl font-semibold text-center">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <BottomLine />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView && "visible"}
          variants={sectionBodyAnimation}
        >
          {/* Filter Buttons */}
          <div className="mt-6 mb-2 flex items-center justify-center flex-wrap">
            {["all", "business", "personal", "game"].map((type) => (
              <button
                key={type}
                className={`btn btn-sm mx-3 my-3 sm:my-0 bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 ${
                  activeBtn === type ? "active-btn" : ""
                }`}
                onClick={() => setActiveBtn(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ x: 200, opacity: 0, scale: 0 }}
                animate={{
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                className="item-container rounded-lg shadow-lg p-3 flex flex-col justify-between hover:shadow-primary duration-500"
                style={{ backgroundColor: "#313131" }}
              >
                <div className="item h-full relative">
                  <img
                    className="rounded-lg h-full w-full object-cover"
                    src={item.mainImage}
                    alt={item.title || "Project Image"}
                  />
                  <div className="overlay absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl text-primary font-semibold mb-3">
                      {item.title}
                    </h3>
                    <Link to={`/project/${item.id}`}>
                      <button className="btn btn-sm border-2 border-transparent bg-primary hover:bg-transparent text-white hover:border-primary duration-500">
                        See Details
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* See All Button */}
        {isHome && (
          <div className="mt-4 text-right">
            <Link to="/project">
              <button className="primary-button text-2xl flex items-center gap-2 hover:text-primary duration-300">
                <span>See All</span>
                <FiArrowRight />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
