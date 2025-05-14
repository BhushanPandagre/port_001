
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blogs from "../../../Utils/blogs";
import { FiExternalLink } from "react-icons/fi";
import { SiLinkedin, SiGithub } from "react-icons/si";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const BlogDetail = () => {
  const { blog_path } = useParams();
  const [blog, setBlog] = useState(null);
  const url = window.location.href;

  useEffect(() => {
    const current_blog = blogs.find((b) => b.path === blog_path);
    setBlog(current_blog);
  }, [blog_path]);

  if (!blog) return <p className="text-center mt-20">Loading blog...</p>;

  return (
    <div className="mt-20">
      <h1 className="text-center text-4xl font-bold">{blog.title}</h1>

      <div className="flex items-center justify-between flex-wrap mt-10 mb-4">
        <span>
          <strong className="text-primary">Bhushan Pandagre</strong>
        </span>
        <span>
          <strong className="text-primary">{blog.date}</strong>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 lg:col-span-3">
          {blog.description?.split("\n").map((s, i) => (
            <React.Fragment key={i}>
              <p className="text-neutral text-justify">{s}</p>
              <br />
            </React.Fragment>
          ))}
        </div>

        <div className="md:col-span-2 lg:col-span-1 px-4 py-6 rounded shadow-lg">
          <div>
            <h4 className="text-lg font-medium mb-3">Other:</h4>
            {blog.github_link && (
              <p className="flex items-center gap-3 mb-2">
                <SiGithub />
                <a
                  href={blog.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span>Github</span> <FiExternalLink />
                </a>
              </p>
            )}
            {blog.linkedin_link && (
              <p className="flex items-center gap-3">
                <SiLinkedin />
                <a
                  href={blog.linkedin_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span>LinkedIn</span> <FiExternalLink />
                </a>
              </p>
            )}
          </div>

          <div className="w-full h-[1px] bg-neutral my-6"></div>

          <h4 className="text-lg font-medium mb-3">Share:</h4>
          <div className="flex items-center gap-4 flex-wrap">
            <EmailShareButton url={url} title={blog.title}>
              <EmailIcon size={32} round />
            </EmailShareButton>
            <FacebookShareButton url={url} title={blog.title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={url} title={blog.title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={url} title={blog.title}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <WhatsappShareButton url={url} title={blog.title}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>

          <div className="w-full h-[1px] bg-neutral my-6"></div>

          {blog.tags?.length > 0 && (
            <>
              <h4 className="text-lg font-medium mb-3">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <button
                    key={tag}
                    className="bg-gray-300 text-white bg-opacity-40 px-2 py-0 m-1 rounded"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </> 
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

