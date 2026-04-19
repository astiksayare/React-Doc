import * as MiniProject from './index';
import React from 'react';

import './mini-project.css';

export const Main = () => {

    const [blogs, setBlog] = React.useState([]);
    
    const [state, dispatch] = React.useReducer(MiniProject.Theme.themeReducer, MiniProject.Theme.initialTheme);
    const buttonTheme = {background: state.backgroundColor, color: state.textColor, border: `1px solid ${state.textColor}`, fontWeight: 'bold'};

    return (
        <MiniProject.Context.ThemeContextProvider value={{state, dispatch, buttonTheme}}>
            <MiniProject.Context.BlogContextProvider value={{blogs, setBlog}}>
                <section 
                style={{background: state.backgroundColor, color: state.textColor, width: '100%', height: '100%'}}
                >
                    <MiniProject.Component.ThemeChanger />
                    <main className='main-container'>
                        <MiniProject.Component.ActionButton />
                    </main>
                </section>
            </MiniProject.Context.BlogContextProvider>
        </MiniProject.Context.ThemeContextProvider>
    )
}