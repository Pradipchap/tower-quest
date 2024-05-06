import Button from "./Button";
import { useNavigate } from "react-router-dom";
interface props {
  onClose: () => void;
  playAgain: () => void;
}
export default function GameWinModal({ onClose, playAgain }: props) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-16">
      <h1 className="text-3xl font-bold ">Congatulations! You won</h1>
      <div className="flex gap-5">
        <Button
          className="w-40 bg-red-700 hover:bg-red-600"
          onClick={() => {
            onClose();
            navigate("/game");
          }}
        >
          Exit
        </Button>
        <Button className="w-40" onClick={playAgain}>
          Play Again
        </Button>
      </div>
    </div>
  );
}
