import React from 'react';
import * as MiniProject from '../index';

export const ThemeChanger = () => {

    const { state, dispatch, buttonTheme } = MiniProject.Context.useThemeContext();
    const [theme, setTheme] = React.useState(false);

    const handleTheme = () => {
        setTheme(!theme);
    }    

    React.useEffect(() => {
        if(theme) dispatch({type: 'DARK'});
        else dispatch({type: 'LIGHT'});
    }, [theme])

    return (
       <nav className='nav-container'>
            <button onClick={handleTheme} className='mr-1' 
             style={buttonTheme}
            >
                {theme ? 'LIGHT' : 'DARK'}
            </button>
       </nav>
    )
}