import React from 'react'
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
                  <div className=" w-3/4 pb-10 ">
                        <Logo />
                  </div>

                  <p className=" font-semibold text-lg uppercase ">Tu ayuda, cerca.</p>

                  <button className=" py-2 px-6 rounded-xl bg-bg-primary text-text-muted-light text-sm " onClick={handleStart}>Comenzar</button>
            </section>
      )
}

export default Welcome

