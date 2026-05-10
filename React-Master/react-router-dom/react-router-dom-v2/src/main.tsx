
import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import * as App from '@/app';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App.Routes.Main />
    </React.StrictMode>
)