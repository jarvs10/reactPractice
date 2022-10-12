import React from 'react'

function Error({mensaje}) {
  return (
    <div className='text-center font-bold bg-red-500 text-white py-3 mb-2'>
        <p>{mensaje}</p>
    </div>   
  )
}

export default Error