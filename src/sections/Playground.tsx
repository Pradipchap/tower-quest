import ShowFloor from "../components/ShowFloor";
import ShowLevel from "../components/ShowLevel";
import PlaySection from "./PlaySection";

export default function Playground() {
  return (
    <div className="relative w-full flex gap-5">
      <PlaySection />
      <div className="flex-grow-0 w-max flex flex-col items-center gap-10">
        <ShowLevel />
        <ShowFloor />
      </div>
    </div>
  );
}
