import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
 
  let [counter, setCounter] = useState(0);

  let myObj = {
    name: "yuvraj chaudhary",
    uid: 4493
  }

  // let counter = 0;
  // const addvalue = () => {
  //   console.log("cliccked :", counter);
  //   setCounter(counter + 1);
  // };

  // const removeValue = () => {
  //   setCounter(counter - 1);
  // };

  return (
    <>
      <h1 className="bg-green-500 p-5 rounded-xl text-black mb-4">tailwind CSS  </h1>
      

        <Card Channel ="chai aur code" someObj = {myObj}/>
        <Card/>
  
  



      
    </>
  );
}

export default App;
