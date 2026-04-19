import * as MiniProject from './index';
import React from 'react';

import './mini-project.css';

export const Main = () => {

    const [state, dispatch] = React.useReducer(MiniProject.Theme.themeReducer, MiniProject.Theme.initialTheme);

    return (
        <MiniProject.Context.ThemeContextProvider value={{state, dispatch}}>
            <section style={{background: state.backgroundColor, color: state.textColor, width: '100%', height: '100%'}}>
                <MiniProject.Component.ThemeChanger />
            </section>
        </MiniProject.Context.ThemeContextProvider>
    )
}