import React,{useContext,useState}from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e)=> setUsername(e.target.value) }
         placeholder='username' />
        <input type="text"
        value={password}
        onChange={(e)=> setPasswordz(e.target.value) }
         placeholder='password' />
        <button onClick={handleubmit}>submit</button>
    </div>
  )
}

export default Login