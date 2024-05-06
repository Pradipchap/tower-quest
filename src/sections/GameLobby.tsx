import { FormEvent, useState } from "react";
import Button from "../components/Button";
import ChooseLevel from "../components/ChooseLevel";
import Heading from "../components/Heading";
import { levels } from "../../utils/constants";
import { useAppDispatch } from "../../custom_hooks/reduxHooks";
import { updateLevel } from "../../redux/slices/GameSlice";
import { useNavigate } from "react-router-dom";
import AutoPlay from "../components/AutoPlay";

export default function GameLobby() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [level, setLevel] = useState(levels[0]);
  function startGame(e: FormEvent) {
    e.preventDefault();
    const selectedLevel = level;
    dispatch(updateLevel(selectedLevel));
    navigate("/game/play");
  }
  return (
    <div className=" flex flex-col items-center">
      <Heading />
      <form onSubmit={startGame} className=" flex flex-col gap-16 items-center">
        <ChooseLevel onSelect={setLevel} />
        <Button type="submit">Start Game</Button>
      </form>
      <AutoPlay />
    </div>
  );
}
