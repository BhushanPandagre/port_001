// import React, { useState, useEffect } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Link } from "react-router-dom";
// import placeholderImage from "../../../assets/placeholder.jpg";
// import blogs from "../../../Utils/blogs";
// import { BottomLine } from "../../../components";
// import { FaAngleRight } from "react-icons/fa";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//     headingAnimation,
//     sectionBodyAnimation,
// } from "../../../hooks/useAnimation";

// const Informasi = () => {
//     const [currentPage] = useState(1);
//     const [blogsPerPage] = useState(3);
//     const [ref, inView] = useInView();
//     const [viewDiv, setViewDiv] = useState(false);
//     const animation = useAnimation();;
//     const indexOfLastBlog = currentPage * blogsPerPage;
//     const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//     const currentBlogs = blogs
//         .sort((a, b) => new Date(b.date) - new Date(a.date))
//         .slice(indexOfFirstBlog, indexOfLastBlog);

//     useEffect(() => {
//         if (inView) {
//             setViewDiv(true);
//         } else {
//             setViewDiv(false);
//         }
//     }, [inView, animation]);

//     return (
//         <div className=" parent py-16">
//             <motion.div
//                 initial="hidden"
//                 animate={viewDiv && "visible"}
//                 variants={headingAnimation}
//             >
//                 <h1 className="text-3xl font-semibold text-center">
//                     New <span className="text-primary">Information</span>
//                 </h1>
//                 <BottomLine />
//             </motion.div>
//             <div className="mt-10">
//                 <motion.div
//                     className=" grid grid-cols-1 md:grid-cols-3 gap-8"
//                     ref={ref}
//                     initial="hidden"
//                     animate={viewDiv && "visible"}
//                     variants={sectionBodyAnimation}
//                 >
//                     {currentBlogs.map((blog) => {
//                         const { _id, title, date, img, description, path } = blog;
//                         return (
//                             <div
//                                 key={_id}
//                                 className="flex flex-col w-full items-center justify-between gap-8 rounded-lg min-h-32"
//                             >
//                                 <div className="w-full">
//                                     <Link to={"/blog/" + path}>
//                                         <LazyLoadImage
//                                             placeholderSrc={placeholderImage}
//                                             src={img}
//                                             className="rounded-lg blog_image cursor-pointer"
//                                         />
//                                     </Link>
//                                 </div>
//                                 <div className="w-full">
//                                     <h2 className="text-[22px] font-medium text-white cursor-pointer hover:text-primary mt-[-25px]">
//                                         <Link to={"/blog/" + path}>{title}</Link>
//                                     </h2>
//                                     <span className="text-gray-600 text-sm">
//                                         <p>{date}</p>
//                                     </span>
//                                     <p className="text-neutral mt-1 mb-6">
//                                         {description?.slice(0, 80)} ...
//                                     </p>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </motion.div>
//             </div>
//             <Link
//                 to="/blog"
//                 className="text-1xl hover:text-primary duration-300"
//             >
//                 <button className="primary-button ">
//                     <span>See All</span>
//                     <span>
//                         <FaAngleRight />
//                     </span>
//                 </button>
//             </Link>
//         </div>
//     );
// };

// export default Informasi;



import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import placeholderImage from "../../../assets/placeholder.jpg";
import blogs from "../../../Utils/blogs";
import { BottomLine } from "../../../components";
import { FaAngleRight } from "react-icons/fa";
import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";

const Informasi = () => {
  const [currentPage] = useState(1);
  const [blogsPerPage] = useState(3);
  const [ref, inView] = useInView({ triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);


  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(indexOfFirstBlog, indexOfLastBlog);

  useEffect(() => {
    if (inView) setViewDiv(true);
  }, [inView]);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      {/* Heading */}
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
        className="text-center"
      >
        <h1 className="text-4xl font-semibold mb-2">
          Latest <span className="text-primary">Insights</span>
        </h1>
        <BottomLine />
      </motion.div>

      {/* Blog Grid */}
      <motion.div
        className="mt-12 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {currentBlogs.map(({ _id, title, date, img, description, path }) => (
          <div
            key={_id}
            className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
          >
            <Link to={`/blog/${path}`}>
              <LazyLoadImage
                src={img}
                placeholderSrc={placeholderImage}
                alt={title}
                className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="p-5">
              <Link to={`/blog/${path}`}>
                <h2 className="text-xl font-semibold text-white group-hover:text-primary transition duration-300">
                  {title}
                </h2>
              </Link>
              <p className="text-sm text-gray-500 mt-1">{date}</p>
              <p className="text-sm text-neutral-300 mt-3">
                {description?.slice(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <div className="mt-12 flex justify-center">
        <Link to="/blog" className="group">
          <button className="flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-black transition-all duration-300">
            <span>See All Blogs</span>
            <FaAngleRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Informasi;
