import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Opening from "./sections/Opening";
import GameStartSection from "./sections/GameStartSection";

function App() {
  const router = createBrowserRouter([
    { element: <Opening />, path: "/" },
    { element: <GameStartSection />, path: "/gamestart" },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
