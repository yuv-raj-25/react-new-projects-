import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let counter = 0;
const  addvalue  = ()=> {
  console.log('cliccked :', counter)

  counter = counter +1; 
}

  return (
   <>

   <h1>chai aur react </h1>
   <h2>counter value: {counter}</h2>

   <button onClick={addvalue}>add Value  {counter}</button>

   <button onClick={addvalue}>remove value </button>

   
   </>
  )
}

export default App
