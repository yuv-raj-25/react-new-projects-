import { useState } from 'react'
import "./App.css"
import {InputBox} from "./components/Index"
import UseCurrencyInfo from "./hooks/UseCurrencyInfo"


function App() {

  const [amount , setAmount] = useState(0)
  const [from , setfrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = UseCurrencyInfo(from)

 const options =  Object.keys(currencyInfo)

 const swap = {()}
  

  return (
    <>
      <InputBox/>
      <InputBox/>
      <h1 className='bg-green-500 text-white text-3xl'>currency app </h1>
      
    </>
  )
}

export default App
