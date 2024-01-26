import { useState , useCallback,useEffect} from 'react'
import './App.css'

function App() {
  const [lenght, set] = useState(5)
  

  return (
    <>
    <h1 className='text-4xl text-center text-white'>Password Genrator</h1>
    </>
  )
}

export default App
