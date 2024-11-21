import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const resetCounter = () => setCount(0);

  return (
    <div>
      <h1>{count}</h1>
      <div style={{ gap: "10px", display: "flex" }}>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}

export default App;
