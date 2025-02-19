import React from "react";

const Section = ({ id, children, className }) => {
  return (
    <div id={id} className={`${className} relative`}>
      {children}
    </div>
  );
};

export default Section;
