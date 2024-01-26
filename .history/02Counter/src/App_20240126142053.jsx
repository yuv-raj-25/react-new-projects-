import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App(props) {
  console.log("props", props);
  let [counter, setCounter] = useState(0);

  let myObj = {
    name: "yuvraj chaudhary",
    uid: 4493
  }

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
        <Card Channel  = "chai "someObj = {myObj}/>
  
  
</div>


      
    </>
  );
}

export default App;
