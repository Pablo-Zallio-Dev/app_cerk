import React from 'react'

function ErrorForm( {error}: {error: string} ) {
  return (
    <p className=" absolute -bottom-4.5 text-xs text-error " >{error}</p>
  )
}

export default ErrorForm