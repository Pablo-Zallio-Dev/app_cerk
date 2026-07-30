import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import { useAlertFlow } from "../../hooks/useAlertFlow";
import { FcSettings } from "react-icons/fc";
import IdleAlert from "../IdleAlert/IdleAlert";
import CountdownAlert from "../countdownAlert/CountdownAlert";
const Home = () => {
  const {
    alertStatus,
    countdown,
    pressSeconds,
    handlePointerDown,
    handlePointerUp,
    handleCancel,
  } = useAlertFlow();

  return (
    <>
      <Container>
        <div className=" flex justify-between items-center py-2 px-6 bg-bg-secondary  ">
          <div className="  w-18 ">
            <Logo small />
          </div>
          <Link
            className=" flex flex-col items-center text-bg-primary "
            to={"/configuration"}
          >
            <FcSettings size={14} />
            <p className=" text-text-muted-dark text-[10px] ">Configuraciòn</p>
          </Link>
        </div>
        <div className=" flex grow justify-center items-center  ">
          {alertStatus === "idle" && (
            <IdleAlert
              pressSeconds={pressSeconds}
              handlePointerDown={handlePointerDown}
              handlePointerUp={handlePointerUp}
            />
          )}
          {alertStatus === "countdown" && (
            <CountdownAlert countdown={countdown} handleCancel={handleCancel} />
          )}
        </div>
      </Container>
    </>
  );
};

export default Home;
