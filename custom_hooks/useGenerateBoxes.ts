// import { useEffect, useState } from "react";
import { GameLevelType } from "../interfaces/componentInterfaces";
// import { useAppSelector } from "./reduxHooks";
import shuffleArray from "../functions/suffleArray";

// export default function useGenerateBoxes() {

  // useEffect(() => {
  //   function setArray() {
  //     const x = generateBoxes(currentLevel);
  //     setBoxes(x);
  //   }
  //   setArray();
  // }, [currentFloor]);

//   return boxes;
// }

export function generateBoxes(level: GameLevelType) {
  const startingArray =
    level === "Normal"
      ? [0, 1, 1, 1]
      : level === "Medium"
      ? [0, 1, 1]
      : level === "Hard"
      ? [0, 0, 1]
      : [0, 0, 0, 1];

  //using Fisher Yates algorith to suffle array
  const shuffledArray = shuffleArray(startingArray);

  return shuffledArray;
}
