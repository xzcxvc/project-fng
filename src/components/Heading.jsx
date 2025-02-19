import React from "react";

const Heading = ({ id, title, children, className }) => {
  return (
    <div id={id} className={`${className} text-white`}>
      <div className="w-7/12 flex gap-5 flex-col">
        <h1 className="text-5xl">{title}</h1>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Heading;
