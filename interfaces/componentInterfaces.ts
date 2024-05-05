export interface BoxInterface {
  id: string;
  type: "gem" | "bomb";
}

export type GameLevelType = "Normal" | "Medium" | "Hard" | "Impossible";
export interface GameStateInterface {
  level: GameLevelType;
  floor: number;
  autoPlay: boolean;
}
