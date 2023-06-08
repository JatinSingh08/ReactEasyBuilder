import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";
import { CanvasProvider } from "./context/canvas-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CanvasProvider>
      <App />
    </CanvasProvider>
  </React.StrictMode>
);
