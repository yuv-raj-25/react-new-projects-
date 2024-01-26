import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import 

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
      <h1 className="bg-green-500 p-5 rounded-xl text-black mb-4">tailwind CSS  </h1>
      <div class="relative h-[400px] w-[300px] rounded-md">
  
  
</div>


      
    </>
  );
}

export default App;
