import React from "react";
import "./Keypad.css";

interface KeypadProps {
  onInput: (value: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onInput }) => {
  const buttons = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "0", "+", "-",
    "C", "=",
  ];

  return (
    <div className="keypad">
      {buttons.map((buttonClick) => (
        <button
          key={buttonClick}
          className={buttonClick === "=" ? "equals" : buttonClick === "+" || buttonClick === "-" ? "operation" : ""}
          onClick={() => onInput(buttonClick)}
        >
          {buttonClick}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
