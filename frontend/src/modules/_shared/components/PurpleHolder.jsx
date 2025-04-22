import React from 'react'

function PurpleHolder ({propName}) {
  return (
    <button className='p-2 cursor-pointer	hover:bg-secondary-600 rounded-md bg-secondary text-center w-fit'>{propName}</button>
  )
}

export default PurpleHolder