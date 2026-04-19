import * as MiniProject from './index';
import React from 'react';

import './mini-project.css';

export const Main = () => {

    const [state, dispatch] = React.useReducer(MiniProject.Theme.themeReducer, MiniProject.Theme.initialTheme);
    const buttonTheme = {background: state.backgroundColor, color: state.textColor, border: `1px solid ${state.textColor}`, fontWeight: 'bold'};

    return (
        <MiniProject.Context.ThemeContextProvider value={{state, dispatch, buttonTheme}}>
            <section 
            style={{background: state.backgroundColor, color: state.textColor, width: '100%', height: '100%'}}
            >
                <MiniProject.Component.ThemeChanger />
                <main className='main-container'>
                    <MiniProject.Component.ActionButton />
                </main>
            </section>
        </MiniProject.Context.ThemeContextProvider>
    )
}