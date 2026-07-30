import { FcAbout } from "react-icons/fc"
import { Link } from "react-router-dom"

const BtnIntructions = ( ) => {
      return (
            <Link
                  className=" flex items-center gap-2 w-max py-1 px-3 m-auto border border-border-input rounded-xl shadow-md/40 bg-bg-input text-center text-text-muted-dark text-sm italic "
                  to={`/instructions`}
            >
                  <FcAbout  size={16} /> Instrucciones de uso
            </Link>
      )
}

export default BtnIntructions