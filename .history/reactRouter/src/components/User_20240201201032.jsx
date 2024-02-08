import React from 'react'
import { useParams } from 'react-router-dom'


const {userd} = useParams()

function User() {
  return (
    <div> User : {userId} </div>
  )
}

export default User