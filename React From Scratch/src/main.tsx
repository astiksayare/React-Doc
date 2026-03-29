
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as App from 'src/app';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App.Main />
    </StrictMode>
)