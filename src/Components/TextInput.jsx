import React from "react";

const TextInput = (props) => {
  const {name} = props

  return (
    <input type="text" name={name} className={props.classes} placeholder={props.placeholder}/>
  );
};

TextInput.defaultProps = {
  placeholder: ""
}

export default TextInput;
