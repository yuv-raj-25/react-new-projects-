import React from 'react'
import { useParams } from 'react-router-dom'



function User() {
    const {userid} = useParams()
  return (
    <div console.log();> User : {userid} </div>
  )
}

export default User