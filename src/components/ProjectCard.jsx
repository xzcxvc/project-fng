import React from "react";
import Button from "./Button";
const ProjectCard = ({ id, logo, text, url, className }) => {
  return (
    <div
      id={id}
      className={`relative lg:bottom-24 bg-gradient-to-b p-5 from-color-4
       via-color-5 to-color-4 rounded-[50px] w-full `}
      style={{ boxShadow: "6px 6px 12px 0px rgba(0, 0, 0, 0.4)" }}
    >
      <div className="flex flex-col items-center gap-5 text-center justify-center text-sm h-full">
        <img src={logo} alt="" />
        <p className="text-n-1 text-wrap">{text}</p>
        <div>
          <Button
            className={`px-2 text-white font-semibold text-sm border bg-yellow-400 rounded-full`}
            href={url}
          >
            More details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
