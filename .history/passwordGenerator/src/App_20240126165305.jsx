import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [lenght, setLength] = useState(5);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*?~";

    for (let i = 1; i <= str.length; i++) {
      let char = maths.floor(maths.random() * str.length + 1);

      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [lenght, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Genrator</h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg
      py">

      </div>
    </>
  );
}

export default App;
