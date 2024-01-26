import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 0;
  const addvalue = () => {
    console.log("cliccked :", counter);
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1 className="bg-green-500 p-5 rounded-xl text-black"> </h1>
      <h2>counter value: {counter}</h2>

      
    </>
  );
}

export default App;
