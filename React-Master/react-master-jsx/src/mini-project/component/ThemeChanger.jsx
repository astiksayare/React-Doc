import React from 'react';
import * as MiniProject from '../index';

export const ThemeChanger = () => {

    const { state, dispatch } = MiniProject.Context.useThemeContext();
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
            <button onClick={handleTheme}  className='mr-1' 
                style={{background: state.backgroundColor, color: state.textColor, border: `1px solid ${state.textColor}`, fontWeight: 'bold'}}
            >
                {theme ? 'LIGHT' : 'DARK'}
            </button>
       </nav>
    )
}