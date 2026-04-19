
import React from 'react';
import Root from 'react-dom/client';
import App from './App';
import * as Hooks from './hooks';
import { Task } from './Task';
import * as Portal from './portal';
import * as MiniProject from './mini-project';

Root.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <Hooks.ReactFrom /> */}
        {/* <Hooks.Reference.InputField /> */}
        {/* <Hooks.UniqueId.Main /> */}
        {/* <Task /> */}
        <MiniProject.Main />
     </React.StrictMode>

    /* Portal */
    // <Portal.EffectPortal />
    // <Portal.ContextPortal />
    // <Portal.ReducerPortal />
    // <Portal.CustomPortal />
);

