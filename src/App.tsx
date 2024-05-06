import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import GameStartSection from "./sections/GameStartSection";
import GameLobby from "./sections/GameLobby";
import CheckUser from "./sections/CheckUser";
import Playground from "./sections/Playground";

function App() {
  const router = createBrowserRouter([
    { element: <CheckUser />, path: "/" },
    {
      element: <GameStartSection />,
      path: "/game",
      children: [
        { element: <GameLobby />, path: "/game" },
        { element: <Playground />, path: "play" },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
