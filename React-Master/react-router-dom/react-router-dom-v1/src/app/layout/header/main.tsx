import * as Router from 'react-router-dom';

export const Main = () => {

    return (
        <nav className="w-full h-8 bg-blue-800 text-white flex justify-center items-center gap-4">
            <Router.NavLink
            to={''}
            className={({isActive} : {isActive: boolean}) => isActive ? 'text-orange-400' : 'text-white'}
            >
                Home
            </Router.NavLink>

            <Router.NavLink
            to={'/about'}
            className={({isActive} : {isActive: boolean}) => isActive ? 'text-orange-400' : 'text-white'}
            >
                About
            </Router.NavLink>

            <Router.NavLink
            to={'/contact'}
            className={({isActive} : {isActive: boolean}) => isActive ? 'text-orange-400' : 'text-white'}
            >
                Contact
            </Router.NavLink>
        </nav>
    )
}