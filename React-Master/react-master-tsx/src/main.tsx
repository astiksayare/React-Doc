import React from "react";
import ReactDom from 'react-dom/client';
import * as App from './app';


ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App.Main />
  </React.StrictMode>
)
