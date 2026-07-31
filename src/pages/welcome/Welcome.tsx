import { useCerkStore } from '../../stores/cerk.store';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo';

const Welcome = () => {
      const navigate = useNavigate();


      const setHasStarted = useCerkStore(
            (state) => state.setHasStarted
      );

      const handleStart = () => {
            setHasStarted(true);
            navigate("/configuration");
      };
      return (
            <section className=" flex flex-col justify-center items-center gap-6 h-dvh bg-bg-secondary text-text-muted-dark ">
                  <div className=" pb-10 ">
                        <Logo />
                  </div>

                  <p className=" font-bold text-3xl uppercase ">Tu ayuda, cerca.</p>
                  <div className=" flex flex-col items-center gap-4 w-2xs text-center text-xs text-text-muted-dark ">
                        <p className="">Lee las instrucciones con calma.</p>
                        <p className="">Completa el formulario correctamente.</p>
                        <p className="">Configura los permisos necesarios (Ubicación, WhatsApp...).</p>
                        <p className="">Y siéntete siempre acompañada.</p>
                  </div>

                  <button className=" py-2 px-6 mt-18 rounded-xl bg-bg-primary text-text-muted-light text-sm " onClick={handleStart}>Comenzar</button>
            </section>
      )
}

export default Welcome

