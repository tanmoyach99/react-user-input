import React from "react";

const Button = ({ children, onClick, type, color }) => {
  return (
    <div
      className="button-sub"
      type={type}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
};

export default Button;
