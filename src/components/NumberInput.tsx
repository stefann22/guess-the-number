import { ChangeEvent, useState } from "react";

interface NumberProps {
  numberLength: number;
  onInputChange: (value: number) => void;
  numberReady?: number;
}

const NumberInput = ({ numberLength, onInputChange, numberReady }: NumberProps) => {
  return (
    <input
      type="text"
      maxLength={numberLength}
      value={numberReady ? numberReady.toString() : ""}
      onChange={(e) => {
        onInputChange(parseInt(e.target.value));
      }}
    />
  );
};

export default NumberInput;
