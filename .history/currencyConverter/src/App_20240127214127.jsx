import { useState } from 'react'
import "./App.css"
import {InputBox} from "./components/Index"
import UseCurrencyInfo from "./hooks/UseCurrencyInfo"


function App() {

  const [amount , setAmount] = useState(0)
  const [from , setfrom] = useState()
  const [to , setTo] = useState9
  

  return (
    <>
      
      <h1 className='bg-green-500 text-white text-3xl'>currency app </h1>
      
    </>
  )
}

export default App
