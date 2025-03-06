import { ChangeEvent, useState } from "react";

interface NumberProps {
  numberLength: number;
  onInputChange: (value: number) => void;
}

const NumberInput = ({ numberLength, onInputChange }: NumberProps) => {
  return (
    <input
      type="text"
      maxLength={numberLength}
      onChange={(e) => {
        onInputChange(parseInt(e.target.value));
      }}
    />
  );
};

export default NumberInput;
