import React from 'react'
import { useParams } from 'react-router-dom'


const {userid} = useParams()
const {userid} = useParams()

function User() {
  return (
    <div> User : {userid} </div>
  )
}

export default User