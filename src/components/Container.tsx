import React from 'react'

const Container = ( {children}: {children: React.ReactNode} ) => {
  return (
    <section className=" flex flex-col justify-center h-dvh bg-bg-secondary ">
      {children}
    </section>
  )
}

export default Container