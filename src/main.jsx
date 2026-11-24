import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";

createRoot(document.querySelector("#root")).render(
     <BrowserRouter basename={import.meta.env.BASE_URL}>
         <App />
     </BrowserRouter>
);   