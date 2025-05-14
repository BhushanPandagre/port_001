
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Items from "../../../Utils/Items";
import { PrimaryBtn, SecondaryBtn } from "../../../components";
import { FaLink, FaCode } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholderImage from "../../../assets/placeholder.jpg";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const selected = Items.find((item) => item.id === parseInt(id));
    setProject(selected);
  }, [id]);

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (!project) {
    return (
      <div className="text-center text-neutral py-20">
        <h2>Loading project details...</h2>
      </div>
    );
  }

  return (
    <div className="parent py-16">
      <h1 className="text-center text-4xl font-medium mt-8">{project.title}</h1>

      {/* Image Slider */}
      <Slider {...sliderSettings} className="mt-6">
        {project.img?.map((image, index) => (
          <div key={index} className="px-2">
            <div className="rounded-lg shadow-xl border-2 border-primary bg-[#313131] overflow-hidden">
              <LazyLoadImage
                placeholderSrc={placeholderImage}
                src={image}
                alt={`Project screenshot ${index + 1}`}
                className="w-full h-auto object-cover"
                effect="blur"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Description */}
      <div className="mt-10 mb-6 text-neutral">
        <h2 className="text-xl font-semibold text-white mb-2">Description:</h2>
        <p className="font-medium">{project.description}</p>
      </div>

      {/* Features */}
      {project.features?.length > 0 && (
        <div className="my-6">
          <h2 className="text-2xl font-semibold mb-3">Features:</h2>
          <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4 text-neutral">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      {project.technologies?.length > 0 && (
        <div className="my-6">
          <h2 className="text-2xl font-semibold mb-3">Tools & Technologies:</h2>
          <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4 text-neutral">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 mt-8">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <PrimaryBtn>
              <span>Visit Now</span>
              <FaLink />
            </PrimaryBtn>
          </a>
        )}
        {project.codeLink && (
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <SecondaryBtn>
              <span>Source Code</span>
              <FaCode />
            </SecondaryBtn>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;



