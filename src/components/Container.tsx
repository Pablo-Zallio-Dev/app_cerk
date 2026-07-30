
const Container = ( {children}: {children: React.ReactNode} ) => {
  return (
    <section className=" flex flex-col justify-start min-h-dvh bg-bg-secondary ">
      {children}
    </section>
  )
}

export default Container