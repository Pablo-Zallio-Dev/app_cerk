import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import { useAlertFlow } from "../../hooks/useAlertFlow";
import { Settings, Siren, TriangleAlert } from "lucide-react"
const Home = () => {
      const {
            alertStatus,
            pressSeconds,
            countdown,
            handlePointerDown,
            handlePointerUp,
            handleCancel,
      } = useAlertFlow();

      return (
            <>
                  <Container>
                        <div className=" flex justify-between items-center py-2 px-6 bg-bg-secondary  ">
                              <div className="  w-18 ">
                                    <Logo />
                              </div>
                              <Link className=" flex items-center gap-2 text-bg-primary " to={"/configuration"}>
                                    <Settings size={18} />
                                    <p className=" text-[10px] ">CONFIGURACION</p>
                              </Link>
                        </div>
                        <div className=" flex flex-1 justify-center items-center  ">

                        {alertStatus === "idle" && (
                              <div className=" flex flex-col justify-center items-center gap-6 px-6 ">
                                    <h1 className=" w-full max-w-3xs text-2xl font-bold text-center ">
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
                                          
                                          <Link className=" flex items-center gap-2 py-1 px-3 border border-border-input rounded-xl shadow-md/40 bg-bg-input text-center text-text-muted-dark text-xs italic " to={"/instructions"}><TriangleAlert size={16} /> Instrucciones de uso</Link>
                                    </div>
                              </div>
                        )}
                        {alertStatus === "countdown" && (
                              <div className=" flex flex-col items-center ">
                                    <p className=" text-lg font-semibold ">Preparando Alerta</p>
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
                        )}
                        </div>


                  </Container>
            </>
      );
};

export default Home;
