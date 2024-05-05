import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Opening from "./sections/Opening";
import GameStartSection from "./sections/GameStartSection";
import GameLobby from "./sections/GameLobby";
import CheckUser from "./sections/CheckUser";

function App() {
  const router = createBrowserRouter([
    { element: <CheckUser />, path: "/" },
    {
      element: <GameStartSection />,
      path: "/game",
      children: [
        { element: <GameLobby />, path: "/game" },
        { element: <Opening />, path: "hello" },
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
