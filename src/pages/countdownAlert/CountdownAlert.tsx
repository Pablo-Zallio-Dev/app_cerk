type CountdownAlertProps = {
  countdown: number;
  handleCancel: () => void;
};

const CountdownAlert = ({ countdown, handleCancel }: CountdownAlertProps) => {
  return (
    <div className=" flex flex-col items-center ">
      <p className=" text-4xl font-semibold ">Preparando Alerta</p>
      <p className=" text-text-muted-dark text-sm font-semibold ">
        Enviando alerta en:
      </p>
      <p className=" py-18 text-8xl font-bold "> {countdown} </p>
      <button
        onClick={handleCancel}
        className=" py-1.5 px-6 border border-border-input rounded-xl shadow-md/40 bg-bg-input "
      >
        Cancelar
      </button>
    </div>
  );
};

export default CountdownAlert;
