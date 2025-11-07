import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Counter, SetCounter] = useState(0);

  // let Counter = 15;

  const addValue = () => {
    console.log("value Added", Counter);
    // Counter = Counter + 1;
    SetCounter(Counter + 1);
    if (Counter == 20) {
    }
  };
  const removeValue = () => {
    console.log("value Removed", Counter);
    SetCounter(Counter - 1);
    if (Counter == 0) {
      stop;
    }
  };
  return (
    <>
      <h1>Hii There !!!</h1>
      <h2>Counter Value: {Counter}</h2>

      <button onClick={addValue}>Add Value {Counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {Counter}</button>
      <p>Footer: {Counter}</p>
    </>
  );
}

export default App;
