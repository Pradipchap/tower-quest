import { levels } from "../../utils/constants";
interface props {
  onSelect: (arg: string) => void;
}
export default function ChooseLevel({ onSelect }: props) {
  return (
    <div className=" flex flex-col items-center mt-10 gap-10">
      <p className="text-xl font-bold">Choose Level</p>
      <div className="flex flex-wrap gap-3">
        {levels.map((level, index) => {
          return (
            <div key={level}>
              {" "}
              <input
                defaultChecked={index === 0}
                type="radio"
                value={level}
                name="level"
                id={level}
                onChange={(e) => onSelect(e.target.value)}
                className="appearance-none peer"
              />
              <label
                htmlFor={level}
                className="rounded-2xl px-3 py-2 bg-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-yellow-700 peer-checked:to-yellow-500 peer-checked:text-white"
              >
                {level}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
