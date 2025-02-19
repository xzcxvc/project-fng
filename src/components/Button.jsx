import React from "react";

const Button = ({ hRef, onClick, className, children }) => {
  const spanClasses = "";

  const renderButton = () => (
    <button className={className} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={hRef} onClick={onClick}>
      Link
    </a>
  );

  return hRef ? renderLink() : renderButton();
};

export default Button;
