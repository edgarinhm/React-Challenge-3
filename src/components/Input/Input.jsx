import React from "react";

const Input = ({ type = "text", id, name, defaultValue, onChange }) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        value={defaultValue}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
