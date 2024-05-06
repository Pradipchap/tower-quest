import { FormEvent } from "react";
import Button from "./Button";
import { useAppDispatch } from "../../custom_hooks/reduxHooks";
import { updateProfile } from "../../redux/slices/ProfileSlice";
import { useNavigate } from "react-router-dom";

export default function NameInput() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function updateUser(e: FormEvent) {
    e.preventDefault();
    const inputELement = e.currentTarget.children[1] as HTMLInputElement;
    const data = inputELement.value;
    dispatch(updateProfile({ name: data, points: 1000 }));
    navigate("/game");
    sessionStorage.setItem("name", data);
    sessionStorage.setItem("points", "1000");
  }

  return (
    <form className=" flex flex-col items-center gap-5" onSubmit={updateUser}>
      <label className="text-2xl text-white font-bold">Enter Your Name</label>
      <input
        type="text"
        className="h-12 min-w-56 w-64 outline-none bg-gray-600 px-3 py-2 text-white rounded-md"
        autoFocus
      />
      <Button type="submit" className="">
        Submit
      </Button>
    </form>
  );
}
