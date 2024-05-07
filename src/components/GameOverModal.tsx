import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
interface props {
  onClose: () => void;
}
export default function GameOverModal({ onClose }: props) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-16">
      <h1 className="text-3xl font-bold ">Game Over</h1>
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
        <Button className="w-40" onClick={onClose}>
          Continue
        </Button>
      </div>
    </div>
  );
}
