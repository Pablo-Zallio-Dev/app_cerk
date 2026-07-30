import { FcPrevious } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const BtnBack = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 w-max py-1 px-3 border border-border-input rounded-xl shadow-md/40 bg-bg-input text-center text-text-muted-dark text-xs italic"
    >
      <FcPrevious size={16} />
      Volver
    </button>
  );
};

export default BtnBack;