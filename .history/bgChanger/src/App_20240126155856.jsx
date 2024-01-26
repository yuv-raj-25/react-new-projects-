import { useState } from "react"


function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 
        py-2 rounded-xl">

          <button 
          onClick={()=>{setColor("red")}}
          className="outline-none px-4 py-1 rounded-ful text-white shadow-lg
          " style={{ backgroundColor: "red" }}>

            Red</button>

          <button
          onClick={()=>{setColor("blue")}}
           className="outline-none px-4 py-1 rounded-ful text-white shadow-lg
          " style={{ backgroundColor: "blue" }}>

            blue</button>

          <button 
          onClick={()=>{setColor("black")}}
          className="outline-none px-4 py-1 rounded-ful text-white shadow-lg
          " style={{ backgroundColor: "black" }}>

            black</button>

          <button
          onClick={()=>{setColor("orange")}}
           className="outline-none px-4 py-1 rounded-ful text-white shadow-lg
          " style={{ backgroundColor: "orange" }}>

            orange</button>

          <button
          onClick={()=>{setColor("red")}}
           className="outline-none px-4 py-1 rounded-ful text-white shadow-lg
          " style={{ backgroundColor: "purple" }}>

            purple</button>


          <button className="outline-none px-4 py-1 rounded-ful text-white shadow-lg
          " style={{ backgroundColor: "green" }}>

            green</button>

        </div>

      </div>

    </div>
  )
}

export default App
