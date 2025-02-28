import React from "react";

interface ButtonProps {
  buttonText: string;
  buttonType: string;
}

const Button = ({ buttonText, buttonType }: ButtonProps) => {
  return <button className={"btn btn-" + buttonType}>{buttonText}</button>;
};

export default Button;
