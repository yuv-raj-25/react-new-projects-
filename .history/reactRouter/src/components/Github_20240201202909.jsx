import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const {data , setData} = useState([])
    useEffect( () => {
        fetch('https://api.github.com/users/yuv-raj-25')
        .then( response => {
            return response.json
        })
        .then( data => {
            console.log(data);
            setData(data)
        })

    },[])

  return (
    <div className='bg-gray-500 text-3xl text-white p-4
     text-center m-4'>Github Followera : {data.followers}</div>
  )
}

export default Github