import React from 'react'

const Error = ({mensajeerror}) => {
  return (
    <div>
        <p className="bg-red-200 text-black p-2 mt-2 mb-2 rounded">{mensajeerror}</p>

    </div>
  )
}

export default Error
