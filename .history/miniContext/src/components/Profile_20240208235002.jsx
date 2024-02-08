import React from 'react'
import { useContext,useState } from 'react' 
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
  
    if(!user) return <div>plz </div>
}

export default Profile