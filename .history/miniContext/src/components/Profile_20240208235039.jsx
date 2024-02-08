import React from 'react'
import { useContext,useState } from 'react' 
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
  
    if(!user) return <div>plz login </div>

    return  <div>welcome {user}</div>
}

export default Profile