import CardContainer from "../../components/CardContainer"
import Container from "../../components/Container"
import { FcBusinesswoman, FcCollect, FcHighPriority, FcOk, FcSettings, FcSms } from "react-icons/fc";
import BtnBack from "../../components/BtnBack";


const UseInstructions = () => {
      return (
            <Container>
                  <div className=" flex flex-col items-center gap-12 pb-12  text-text-muted-dark  ">
                        <div className="  ">
                              <h2 className=" fixed top-0 left-0 w-full py-4 border-b border-border-input text-2xl font-semibold text-center bg-bg-secondary      ">Instruciones de uso</h2>
                              <p className=" pt-20 mx-4 text-sm  ">Aprende cómo usar Cerk correctamente para estar siempre preparado </p>
                        </div>
                        <div className=" flex flex-col gap-6 mx-4 ">
                              <CardContainer>
                                    <div className=" flex items-center gap-4 ">
                                          <FcSettings size={24} />
                                          <h3 className=" text-lg font-bold ">Configura CerK antes de utilizarla</h3>
                                    </div>
                                    <p className=" pt-4 leading-5 text-sm ">Dedica unos minutos a completar la configuración cuando estés tranquilo. En una situación de emergencia es importante que todo esté preparado.</p>
                              </CardContainer>
                              <CardContainer>
                                    <div className=" flex items-center gap-4 ">
                                          <FcBusinesswoman size={24} />
                                          <h3 className=" text-lg font-bold ">Contacto de confianza</h3>
                                    </div>
                                    <p className=" pt-4 leading-5 text-sm ">Introduce el número de teléfono en el input correspondiente en el formulario en formato internacional incluyendo el prefijo del país.</p>
                                    <p className=" mt-4 bg-bg-input p-2 rounded-md text-bg-primary/30 font-bold text-xs ">+34 666 11 22 33</p>
                                    <p className=" mt-4 italic text-[10px] "> Esto permitirá que WhatsApp abra correctamente la conversación. </p>
                              </CardContainer>
                              <CardContainer>
                                    <div className=" flex items-center gap-4 ">
                                          <FcSms size={24} />
                                          <h3 className=" text-lg font-bold ">Mensaje de alerta</h3>
                                    </div>
                                    <p className=" pt-4 leading-5 text-sm ">CerK incluye un mensaje de emergencia por defecto, pero puedes modificarlo en cualquier momento desde la configuración para adaptarlo a tus necesidades.</p>
                              </CardContainer>
                              <CardContainer>
                                    <div className=" flex items-center gap-4 ">
                                          <FcCollect size={24} />
                                          <h3 className=" text-lg font-bold ">Compartir ubicacion.</h3>
                                    </div>
                                    <p className=" pt-4 leading-5 text-sm ">Si activas esta opción, CerK intentará añadir tu ubicación GPS al mensaje antes de abrir WhatsApp.</p>
                                    <p className=" mt-4 italic text-[10px] "> Recuerda conceder permiso de ubicación al navegador.</p>
                              </CardContainer>
                              <CardContainer>
                                    <div className=" flex items-center gap-4 ">
                                          <FcHighPriority size={24} />
                                          <h3 className=" text-lg font-bold ">Como enviar una alerta.</h3>
                                    </div>
                                    <div className=" flex flex-col ">
                                          <div className=" flex  items-start  gap-4 mt-4 ">
                                                <p className=" flex justify-center items-center shrink-0 w-6 h-6 rounded-full bg-bg-input text-sm font-semibold ">1</p>
                                                <p className=" leading-5 text-sm ">Mantén pulsado el botón de emergencia durante 3 segundos.</p>
                                          </div>
                                          <div className=" flex  items-start  gap-4 mt-4 ">
                                                <p className=" flex justify-center items-center shrink-0 w-6 h-6 rounded-full bg-bg-input text-sm font-semibold ">2</p>
                                                <p className=" leading-5 text-sm ">Comenzará una cuenta atrás de 5 segundos.</p>
                                          </div>
                                          <div className=" flex  items-start  gap-4 mt-4 ">
                                                <p className=" flex justify-center items-center shrink-0 w-6 h-6 rounded-full bg-bg-input text-sm font-semibold ">3</p>
                                                <p className=" leading-5 text-sm ">Durante ese tiempo podrás cancelar el envío.</p>
                                          </div>
                                          <div className=" flex  items-start  gap-4 mt-4 ">
                                                <p className=" flex justify-center items-center shrink-0 w-6 h-6 rounded-full bg-bg-input text-sm font-semibold ">4</p>
                                                <p className=" leading-5 text-sm ">Si no cancelas, CerK abrirá WhatsApp con el mensaje preparado.</p>
                                          </div>
                                    </div>
                              </CardContainer>
                              <CardContainer cardSecondary>
                                    <div className=" flex items-center gap-4 ">
                                          <FcOk size={24} />
                                          <h3 className=" text-lg font-bold ">Realiza una prueba</h3>
                                    </div>
                                    <p className=" pt-4 leading-5 text-sm ">Antes de necesitar CerK, realiza una prueba con tu contacto de confianza para comprobar que el número, el mensaje y la ubicación funcionan correctamente.</p>
                              </CardContainer>
                        </div>
                       <BtnBack />

                  </div>
            </Container>
      )
}

export default UseInstructions