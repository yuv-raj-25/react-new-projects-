import React from 'react'
import { useContext,useState } from 'react' 
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
  
    if(!user) 
}

export default Profile