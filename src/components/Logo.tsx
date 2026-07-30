
const Logo = ({small}: {small?:boolean}) => {
  return (
      
    <img className=' ' src={` ${small ?'/image_logo-header.png' :'/image_logo.webp'} `} alt="logo de cerk" />
  )
}

export default Logo