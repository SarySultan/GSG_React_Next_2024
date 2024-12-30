import React from "react";
import "./ResultDisplay.css";

interface ResultDisplayProps {
  equation: string;
  result: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ equation, result }) => {
  return (
    <div className="result-display">
      <span className="equation">{equation || "0"}</span>
      <span className="result">{result || "0"}</span>
    </div>
  );
};

export default ResultDisplay;
