import React from 'react'
import { useEffect } from 'react'

function Github() {
    useEffect( () => {
        fetch('https://api.github.com/users/yuv-raj-25')
        .then( (response) => {
            response = re

        })

    },[])

  return (
    <div className='bg-gray-500 text-3xl text-white p-4
     text-center m-4'>Github</div>
  )
}

export default Github