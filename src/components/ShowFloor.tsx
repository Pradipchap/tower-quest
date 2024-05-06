import { useAppSelector } from "../../custom_hooks/reduxHooks";

export default function ShowFloor() {
  const currentFloor = useAppSelector((state) => state.Game.floor);
  console.log(new Array(8));
  return (
    <div className="h-96 w-2 bg-gray-700 absolute top-5 right-10 flex flex-col justify-between items-center">
      {new Array(8).fill(null).map((_, index) => (
        <div
          className={`w-10 h-2 rounded-full ${
            currentFloor === 8 - index ? "bg-yellow-500" : "bg-gray-800"
          }`}
        />
      ))}
    </div>
  );
}
