import Heading from "../components/Heading";
import NameInput from "../components/NameInput";

export default function Opening() {
  return (
    <div className="min-h-screen w-full flex flex-col pt-12 items-center gap-44">
			<Heading/>
      <NameInput />
    </div>
  );
}
