import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../custom_hooks/reduxHooks";
import Opening from "./Opening";

export default function CheckUser() {
  const userDetails = useAppSelector((state) => state.Profile);
  if (userDetails.name === "") {
    return <Opening />;
  } else return <Navigate to="/game" />;
}
