import React from 'react'

const CardContainer = ({children, cardSecondary}: {children:React.ReactNode, cardSecondary?: boolean}) => {
  return (
    <div className={ ` ${cardSecondary ?' bg-bg-input ' : 'bg-white'} py-4 px-3 border border-text-muted-light rounded-lg `  }>
      {children}
    </div>
  )
}

export default CardContainer