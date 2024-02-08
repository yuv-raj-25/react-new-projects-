import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from./components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <h1 className='bg-green-500 p-4'>React Router</h1>
    </>
  )
}

export default App
