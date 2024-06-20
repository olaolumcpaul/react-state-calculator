import "./App.css";
import { useState } from "react";

function App() {
  //  Hooks for managing the calculator's state
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("+");
  const [secondNumber, setSecondNumber] = useState("0");
  const [result, setResult] = useState("0");
  const [storedValue, setStoredValue] = useState(null); // State to store the current answer

  // Function to handle number button clicks
  const handleNumberClick = (value, setNumber) => {
    setNumber((prev) => {
      if (value === ".") {
        if (!prev.includes(".")) {
          return prev + value; // Append decimal point if not already present
        }
        return prev; // Ignore if decimal point already exists
      }

      if (prev === "0" && value === "0") {
        return "0"; // Prevent leading zeros
      }

      if (prev === "0" && value !== ".") {
        return value; // Replace leading zero with the new number
      }

      return prev + value; // Append numbers
    });
  };

  // Function to handle clear button click
  const handleClear = (setNumber) => {
    setNumber("0");
  };

  // Function to handle operation button clicks
  const handleOperationClick = (value) => {
    setOperation(value);
  };

  // Function to calculate the result based on the operation
  const calculateResult = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let res = 0;
    switch (operation) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "÷":
        res = num1 / num2;
        break;
      default:
        break;
    }
    setResult(res.toString());
  };

  // Function to store the current result
  const storeResult = () => {
    setStoredValue(result);
  };

  // Function to recall the stored value to the given setter
  const recallValue = (setNumber) => {
    if (storedValue !== null) {
      setNumber(storedValue);
    }
  };

  return (
    <div className="calculator">
      {/* Panel for the first number div */}
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={() => handleNumberClick("1", setFirstNumber)}>
            1
          </button>
          <button onClick={() => handleNumberClick("2", setFirstNumber)}>
            2
          </button>
          <button onClick={() => handleNumberClick("3", setFirstNumber)}>
            3
          </button>
          <button onClick={() => handleNumberClick("4", setFirstNumber)}>
            4
          </button>
          <button onClick={() => handleNumberClick("5", setFirstNumber)}>
            5
          </button>
          <button onClick={() => handleNumberClick("6", setFirstNumber)}>
            6
          </button>
          <button onClick={() => handleNumberClick("7", setFirstNumber)}>
            7
          </button>
          <button onClick={() => handleNumberClick("8", setFirstNumber)}>
            8
          </button>
          <button onClick={() => handleNumberClick("9", setFirstNumber)}>
            9
          </button>
          <button onClick={() => handleNumberClick("0", setFirstNumber)}>
            0
          </button>
          <button onClick={() => handleNumberClick(".", setFirstNumber)}>
            .
          </button>
          <button onClick={() => handleClear(setFirstNumber)}>Clear</button>
        </div>
        <button onClick={() => recallValue(setFirstNumber)}>Recall</button>
      </div>

      {/* Panel for the operation div */}
      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => handleOperationClick("+")}>+</button>
          <button onClick={() => handleOperationClick("-")}>-</button>
          <button onClick={() => handleOperationClick("*")}>*</button>
          <button onClick={() => handleOperationClick("÷")}>÷</button>
        </div>
      </div>

      {/* Panel for the second number div */}
      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={() => handleNumberClick("1", setSecondNumber)}>
            1
          </button>
          <button onClick={() => handleNumberClick("2", setSecondNumber)}>
            2
          </button>
          <button onClick={() => handleNumberClick("3", setSecondNumber)}>
            3
          </button>
          <button onClick={() => handleNumberClick("4", setSecondNumber)}>
            4
          </button>
          <button onClick={() => handleNumberClick("5", setSecondNumber)}>
            5
          </button>
          <button onClick={() => handleNumberClick("6", setSecondNumber)}>
            6
          </button>
          <button onClick={() => handleNumberClick("7", setSecondNumber)}>
            7
          </button>
          <button onClick={() => handleNumberClick("8", setSecondNumber)}>
            8
          </button>
          <button onClick={() => handleNumberClick("9", setSecondNumber)}>
            9
          </button>
          <button onClick={() => handleNumberClick("0", setSecondNumber)}>
            0
          </button>
          <button onClick={() => handleNumberClick(".", setSecondNumber)}>
            .
          </button>
          <button onClick={() => handleClear(setSecondNumber)}>Clear</button>
        </div>
        <button onClick={() => recallValue(setSecondNumber)}>Recall</button>
      </div>

      {/* Panel for displaying the result div */}
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={calculateResult}>=</button>
        </div>
        <button onClick={storeResult}>Store</button>
      </div>
    </div>
  );
}

export default App;
