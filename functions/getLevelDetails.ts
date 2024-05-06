import { GameLevelType } from "../interfaces/componentInterfaces";

export default function getLevelDetails(level: GameLevelType) {
  switch (level) {
    case "Normal":
      return { boxes: 4, gems: 3, bombs: 1 };
    case "Medium":
      return { boxes: 1, gems: 2, bombs: 1 };
    case "Hard":
      return { boxes: 3, gems: 1, bombs: 2 };
    case "Impossible":
      return { boxes: 4, gems: 1, bombs: 3 };
    default:
      break;
  }
}
