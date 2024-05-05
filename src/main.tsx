import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ReduxProvider from "../redux/ReduxProvider.tsx";
import { store } from "../redux/store.ts";
import { fetchUserDetails } from "../redux/slices/ProfileSlice.ts";

store.dispatch(fetchUserDetails());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
