import { useState, useCallback, useEffect } from "react";


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

      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg
        px-5 my-8 text-orange-500 bg-gray-800"
      >
        <h1 className="text-4xl text-center text-white">Password Genrator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">

          <input
             type="text"
             value={pass}


           />

        </div>
      </div>
    </>
  );
}

export default App;
