import { Dispatch, SetStateAction } from "react";

export interface BoxInterface {
  id: string;
  type: 0 | 1;
  setGameState: Dispatch<SetStateAction<number[]>>;
}

export type GameLevelType = "Normal" | "Medium" | "Hard" | "Impossible";
export interface GameStateInterface {
  level: GameLevelType;
  floor: number;
  autoPlay: boolean;
}
