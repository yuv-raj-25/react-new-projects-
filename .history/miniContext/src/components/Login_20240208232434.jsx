import React,{useContext,useState}from 'react'
import UserContext from '../context/UserContext'


function Login() {
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username' />
        <input type="text" placeholder='password' />
    </div>
  )
}

export default Login