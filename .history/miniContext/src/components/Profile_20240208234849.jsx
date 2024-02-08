import React from 'react'
import { useContext,useState } from 'react' 
import UserContext from '../context/UserContext'

function Profile() {
    const {setUser} = useContext(UserContext)
  return (
    
    <div>Profile</div>
  )
}

export default Profile