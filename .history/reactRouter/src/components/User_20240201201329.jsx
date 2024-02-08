import React from 'react'
import { useParams } from 'react-router-dom'



function User() {
    const {userid} = useParams()
  return (
    <div cl> User : {userid} </div>
  )
}

export default User