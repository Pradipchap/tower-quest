import NameInput from "../components/NameInput";

export default function Opening() {
  return (
    <div className=" bg-green-800 min-h-screen w-full flex flex-col pt-12 items-center gap-44">
      <h1 className="text-4xl font-bold text-white">Tower Quest</h1>
			<NameInput/>
    </div>
  );
}
