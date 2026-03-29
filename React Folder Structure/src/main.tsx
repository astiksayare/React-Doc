
import React from "react";
import { createRoot } from "react-dom/client";
import './styles/index.css';
import * as App from "src/app";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App.Main />
    </React.StrictMode>
)