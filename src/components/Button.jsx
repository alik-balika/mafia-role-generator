import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-black text-white p-2 rounded-sm">
      {children}
    </button>
  );
};

export default Button;
