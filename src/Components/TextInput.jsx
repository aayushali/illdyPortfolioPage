import React from "react";

const TextInput = (props) => {
  const {name} = props

  return (
    <input type="text" name={name} className="w-full h-12 border bg-gray-50 rounded-md" />
  );
};

export default TextInput;
