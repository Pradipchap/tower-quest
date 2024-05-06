import { useAppSelector } from "../../custom_hooks/reduxHooks";
import CoinSvg from "../assets/Coin.svg";

export default function UserInformationBar() {
  const userProfile = useAppSelector((state) => state.Profile);
  return (
    <div className="w-full h-14 bg-green-900 flex justify-between items-center px-5">
      <h1 className="font-bold">{userProfile.name}</h1>
      <div className="flex items-center gap-2 font-bold">
        <img src={CoinSvg} alt="coin image" className="w-10" />
        <p>{userProfile.points}</p>
      </div>
    </div>
  );
}
