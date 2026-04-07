
import React from 'react';
import Root from 'react-dom/client';
import App from './App';
import * as Hooks from './hooks/index';
import { Task } from './Task';
import { EffectPortal } from './portal/EffectPortal';


Root.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    //     {/* <App /> */}
    //     {/* <Hooks.ReactFrom /> */}
    //     {/* <Task /> */}
        
    // </React.StrictMode>
    <EffectPortal />
);

