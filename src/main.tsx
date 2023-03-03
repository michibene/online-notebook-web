import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "pages/LandingPage";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <LandingPage />
    </React.StrictMode>
);
