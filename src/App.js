/* eslint no-eval: 0 */
import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Function to handle button clicks
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Function to handle calculation
  const handleCalculate = () => {
    try {
      // Evaluate the input expression
      const evalResult = eval(input);

      // Check for division by zero and NaN
      if (input.includes("0/0") && !evalResult) {
        setResult("NaN");
      } else if (input.includes("/0") && !evalResult) {
        setResult("Infinity");
      } else if (isNaN(evalResult)) {
        setResult("Error");
      } else {
        setResult(evalResult.toString());
      }
    } catch {
      setResult("Error");
    }
  };

  // Function to handle clear
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      {/* Input field for displaying expression */}
      <input type="text" value={input} readOnly className="input-field" />
      {/* Result display */}
      <div className="result">{result}</div>
      <div className="buttons">
        {/* Number and operator buttons */}
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
}

export default App;
