
const Container = ( {children}: {children: React.ReactNode} ) => {
  return (
    <section className=" flex flex-col justify-start min-h-screen py-5 bg-bg-secondary ">
      {children}
    </section>
  )
}

export default Container