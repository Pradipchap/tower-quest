import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { generateBoxes } from "../../custom_hooks/useGenerateBoxes";
import MysteryBox from "../components/Box";
import { useAppDispatch, useAppSelector } from "../../custom_hooks/reduxHooks";
import { increaseFloor, resetFloot } from "../../redux/slices/GameSlice";
import getLevelDetails from "../../functions/getLevelDetails";
import { deductPoints } from "../../redux/slices/ProfileSlice";

export default function PlaySection() {
  const dispatch = useAppDispatch();
  const currentLevel = useAppSelector((state) => state.Game.level);
  const [boxes, setBoxes] = useState<{ id: string; data: 0 | 1 }[]>(
    generateBoxes(currentLevel)
  );
  const currentFloor = useAppSelector((state) => state.Game.floor);
  const [gameState, setGameState] = useState<number[]>([]);
  const levelDetails: {
    boxes: number;
    gems: number;
    bombs: number;
  } = getLevelDetails(currentLevel);

  useEffect(() => {
    function setArray() {
      dispatch(deductPoints(20));
      const x = generateBoxes(currentLevel);
      setBoxes(x);
    }
    if (currentFloor > 1) setArray();
  }, [currentFloor]);

  useEffect(() => {
    function handleBox() {
      if (gameState.includes(0)) {
        setGameState([]);
        setBoxes(generateBoxes(currentLevel));
        dispatch(resetFloot());
        dispatch(deductPoints(20));
      } else {
        if (gameState.length >= levelDetails.gems) {
          dispatch(increaseFloor());
          setGameState([]);
        }
      }
    }
    handleBox();
  }, [gameState]);

  return (
    <div
      className="flex-1 flex flex-wrap mt-20 gap-10 justify-center items-center
		"
    >
      {boxes.map((item) => {
        return (
          <Fragment key={item.id}>
            <MysteryBox
              id={item.id}
              type={item.data}
              setGameState={setGameState}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
