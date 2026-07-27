import React from 'react'

const SubtitleForm = ({children}: {children: React.ReactNode}) => {
  return (
    <h2 className=" pb-6 font-semibold text-start text-lg  ">{children}</h2>
  )
}

export default SubtitleForm