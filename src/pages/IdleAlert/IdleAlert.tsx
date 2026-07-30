import { Siren } from "lucide-react";
import BtnIntructions from "../../components/BtnIntructions";

type IdleAlertProps = {
  pressSeconds: number | null;
  handlePointerDown: () => void;
  handlePointerUp: () => void;
};

const IdleAlert = ({
  pressSeconds,
  handlePointerDown,
  handlePointerUp,
}: IdleAlertProps) => {
  return (
    <div className=" flex flex-col justify-center items-center gap-6 px-6 ">
      <h1 className=" w-full max-w-3xs text-4xl font-bold text-center ">
        Manten pulsado para enviar la alerta
      </h1>
      <div className=" p-4 shadow-lg/80 shadow-text-muted-dark/70 rounded-full border border-text-muted-light ">
        <button
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className=" flex flex-col justify-center items-center w-50 h-50 bg-linear-to-r from-purple-500 to-purple-900 rounded-full text-text-muted-light text-xl font-semibold "
        >
          <Siren size={48} />
          <p className=" select-none ">SOS</p>
        </button>
      </div>
      <p className=" text-xs text-text-muted-dark italic ">
        Manten pulsado durante 3 segundos
      </p>
      <p className=" font-semibold text-xl  h-5 ">
        {pressSeconds !== null && <p>{pressSeconds}</p>}
      </p>
      <div className=" flex justify-center pt-10 w-full  ">
        <BtnIntructions />
      </div>
    </div>
  );
};

export default IdleAlert;
