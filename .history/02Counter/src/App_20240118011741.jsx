import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(0)
  let [remove, setRemove]  = useState(counter)
  
  
  // let counter = 0;
const  addvalue  = ()=> {
  console.log('cliccked :', counter)
  setCounter(counter + 1)
}

const removeValue = ()=>{
  console.log('clicked :', remove);
  removeVal = counter - 1;
  setRemove(remove)


}

  return (
   <>

   <h1>chai aur react </h1>
   <h2>counter value: {counter}</h2>

   <button onClick={addvalue}>add Value  {counter}</button>
   <br />
   <br />

   <button onClick={removeValue}>remove value {counter}</button>

   
   </>
  )
}

export default App
