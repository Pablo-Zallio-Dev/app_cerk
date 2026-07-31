import { useCerkStore } from "../../stores/cerk.store";
import { useForm } from "react-hook-form";
import type { ConfigurationForm } from "../../types/configurationForm.type";
import Container from "../../components/Container";
import Line from "../../components/Line";
import SubtitleForm from "../../components/SubtitleForm";
import { Link, useNavigate } from "react-router-dom";
import ErrorForm from "../../components/ErrorForm";
import Logo from "../../components/Logo";
import { MapPin } from "lucide-react";
import BtnIntructions from "../../components/BtnIntructions";

const Configuration = () => {
  const navigate = useNavigate();

  const message = useCerkStore((state) => state.message);
  const userName = useCerkStore((state) => state.userName);
  const contactName = useCerkStore((state) => state.contactName);
  const phoneContact = useCerkStore((state) => state.phoneContact);
  const shareLocation = useCerkStore((state) => state.shareLocation);

  const setUserName = useCerkStore((state) => state.setUserName);
  const setContactName = useCerkStore((state) => state.setContactName);
  const setPhoneContact = useCerkStore((state) => state.setPhoneContact);
  const setMessage = useCerkStore((state) => state.setMessage);
  const setShareLocation = useCerkStore((state) => state.setShareLocation);
  const isConfigurationComplete = useCerkStore(
    (state) => state.isConfigurationComplete,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfigurationForm>({
    defaultValues: {
      userName,
      contactName,
      phoneContact,
      message,
      shareLocation,
    },
  });

  const onSubmit = (data: ConfigurationForm) => {
    setUserName(data.userName);
    setContactName(data.contactName);
    setPhoneContact(data.phoneContact);
    setMessage(data.message);
    setShareLocation(data.shareLocation);
    navigate("/");
  };
  const isComplete = isConfigurationComplete();
  console.log(isComplete);

  return (
    <Container>
      <div className=" py-2 px-4 bg-bg-secondary  ">
        <div className="  w-18 ">
          <Logo />
        </div>
      </div>
      <div className=" flex flex-col items-center ">
        <div className="pb-6 px-4">
          <section className=" flex  flex-col gap-4 py-8 ">
            <h1 className=" pb-2 font-semibold text-start text-2xl ">
              Configuración
            </h1>
            <p className=" mb-4 text-xs  ">
              Personaliza los datos de alerta de emergencia. Ante cualquier duda, revisa las instrucciones de uso. Es obligatorio rellenar los campos requeridos.
            </p>
          </section>

          <BtnIntructions />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className=" px-6 py-8 mx-4 mb-18 max-w-96  border border-text-muted-light rounded-xl  bg-white "
        >
          <div className=" flex flex-col items-start gap-2 ">
            <label htmlFor="" className=" font-semibold text-sm ">
              Tu nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className=" w-full py-2 px-4 bg-bg-input rounded-lg text-sm border border-border-input focus:border-border-inputOutline  focus:outline-none transition-colors duration-150 "
              {...register("userName")}
            />
          </div>
          <Line />

          <SubtitleForm>Contacto de confianza</SubtitleForm>
          <div className=" flex flex-col gap-4 ">
            <div className=" flex flex-col items-start gap-2 ">
              <label
                htmlFor=""
                className=" font-semibold text-xs text-text-muted-dark "
              >
                Nombre
              </label>
              <input
                type="text"
                placeholder="Nombre de contacto"
                className=" w-full py-2 px-4 bg-bg-input rounded-lg text-sm border border-border-input focus:border-border-inputOutline  focus:outline-none transition-colors duration-150 "
                {...register("contactName")}
              />
            </div>
            <div className=" relative flex flex-col items-start gap-2 ">
              <label
                htmlFor=""
                className=" font-semibold text-xs text-text-muted-dark "
              >
                Telefono*
              </label>
              <input
                type="text"
                placeholder="+34 123 45 56 78"
                className=" w-full py-2 px-4 bg-bg-input rounded-lg text-sm border border-border-input focus:border-border-inputOutline  focus:outline-none transition-colors duration-150 "
                {...register("phoneContact", {
                  required: "El telefono es obligatorio",
                })}
              />
              {errors.phoneContact && (
                <ErrorForm error="El telefono es obligatorio" />
              )}
            </div>
          </div>
          <Line />
          <div className=" flex flex-col items-start gap-2 ">
            <label htmlFor="" className=" font-semibold text-sm ">
              Mensaje de alerta
            </label>
            <textarea
              rows={5}
              className=" resize-none  w-full py-2 px-4 bg-bg-input rounded-lg text-sm border border-border-input focus:border-border-inputOutline  focus:outline-none transition-colors duration-150 "
              {...register("message")}
            />
          </div>
          <p className=" pt-1 text-xs text-text-muted-dark italic  ">
            Este mensaje puede ser modificado y se enviará junto con tu alerta
          </p>
          <Line />
          <div className=" flex justify-start items-start gap-2 ">
            <input
              type="checkbox"
              className=" mt-1  "
              {...register("shareLocation")}
            />
            <div className=" flex flex-col items-start  ">
              <label
                htmlFor=""
                className=" flex items-center gap-2 font-semibold text-sm "
              >
                <MapPin size={16} />
                Compartir ubicación
              </label>
              <p className=" pt-1 text-xs text-text-muted-dark italic  ">
                Se compartirá tu ubicación GPS con el contacto de confianza
              </p>
            </div>
          </div>
          <div className=" pt-8  flex flex-col gap-4 ">
            <button
              className=" w-full max-w-64 py-2 px-6 rounded-xl bg-bg-primary text-text-muted-light text-center text-sm shadow-md shadow-text-muted-dark "
              type="submit"
            >
              Guardar
            </button>
            <Link
              to={isComplete ? "/" : "#"}
              onClick={(e) => {
                if (!isComplete) e.preventDefault();
              }}
              className={`
    w-full max-w-64 py-2 px-6 rounded-xl bg-bg-secondary text-center text-sm shadow-md shadow-text-muted-dark
    ${!isComplete ? "pointer-events-none opacity-50 text-text-muted-light" : ""}
  `}
            >
              Volver sin modificar
            </Link>
            <p className=" text-[10px] italic text-text-muted-dark ">* Los campos son requeridos</p>
            <p className=" text-[10px] italic text-text-muted-dark ">** La primera vez que ingreses no podras salir sin configurar los campos requeridos</p>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Configuration;
