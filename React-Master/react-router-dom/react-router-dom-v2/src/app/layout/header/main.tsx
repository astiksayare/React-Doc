import * as Router from 'react-router-dom';

export const Main = () => {

    return  (
        <nav
        className="w-full flex justify-center gap-4 items-center text-lg h-[10%]"
        >
           <Router.NavLink
           to={'/'}
           className={({isActive}) => `w-25 p-4 h-8 rounded-lg text-white font-semibold border-gray-400 text-center
           ${isActive ? " bg-blue-500" : "bg-blue-200"}`}
           >
            Home
           </Router.NavLink>

           <Router.NavLink
           to={'/about'}
           className={({isActive}) => `w-25 p-4 h-8 rounded-lg text-white font-semibold border-gray-400 text-center
           ${isActive ? " bg-blue-500" : "bg-blue-200"}`}
           >
            About
           </Router.NavLink>

           <Router.NavLink
           to={'/service'}
           className={({isActive}) => `w-25 p-4 h-8 rounded-lg text-white font-semibold border-gray-400 text-center
           ${isActive ? " bg-blue-500" : "bg-blue-200"}`}
           >
            Service
           </Router.NavLink>

           <Router.NavLink
           to={'/contact'}
           className={({isActive}) => `w-25 p-4 h-8 rounded-lg text-white font-semibold border-gray-400 text-center
           ${isActive ? " bg-blue-500" : "bg-blue-200"}`}
           >
            Contact
           </Router.NavLink>
        </nav>
    )
}