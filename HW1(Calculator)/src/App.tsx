import React, { useState } from "react";
import ResultDisplay from "./components/ResultDisplay/ResultDisplay";
import Keypad from "./components/Keypad/Keypad";
import "./App.css";

const App: React.FC = () => {
  const [equation, setEquation] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleInput = (value: string) => {
    if (value === "=") {
      try {
        const evalResult = eval(equation);
        setResult(evalResult.toString());
      } catch {
        setResult("Error");//if He input wrong  values like this: 5++, 10--, 4-+
      }
    } else if (value === "C") {
      setEquation("");
      setResult("");
    } else {
      setEquation((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <ResultDisplay equation={equation} result={result} />
      <Keypad onInput={handleInput} />
    </div>
  );
};

export default App;
