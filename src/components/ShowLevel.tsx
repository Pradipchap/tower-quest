import { useAppSelector } from "../../custom_hooks/reduxHooks";

export default function ShowLevel() {
  const level = useAppSelector((state) => state.Game.level);
  return (
    <div className="w-max border border-yellow-600 rounded-xl px-3 py-2 bg-yellow-700 text-white">
      {level}
    </div>
  );
}
