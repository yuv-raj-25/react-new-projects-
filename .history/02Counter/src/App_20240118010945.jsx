import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let counter = 0;
const  addvalue  = ()=> {
  console.log('cliccked :', counter)
}

  return (
   <>

   <h1>chai aur react </h1>
   <h2>counter value: </h2>

   <button onClick={addvalue}>add Value </button>

   <button onClick={addvalue}>remove value</button>

   
   </>
  )
}

export default App
