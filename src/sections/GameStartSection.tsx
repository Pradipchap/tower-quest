import { Outlet } from "react-router-dom";
import UserInformationBar from "../components/UserInformationBar";

export default function GameStartSection() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-10">
      <UserInformationBar />
      <Outlet />
    </div>
  );
}
