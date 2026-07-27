import React from 'react'

const Container = ( {children}: {children: React.ReactNode} ) => {
  return (
    <section className=" flex flex-col justify-center py-5 bg-bg-secondary ">
      {children}
    </section>
  )
}

export default Container