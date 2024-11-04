import React from "react";
import { NavLink } from "react-router-dom";


const pages = [
    {
        id: 1,
        pageName: 'Home',
        pageLink: ""
    },

    {
        id: 2,
        pageName: 'About',
        pageLink: "about"
    },

    {
        id: 3,
        pageName: 'Contact',
        pageLink: "contact"
    },
]

const Navbar = () => {

    const [currentPageName, setCurrentPageName] = React.useState('Home');

    return (
        <header>
            <nav className="h-[8vh] w-full bg-[#000] text-[#fff] flex justify-between items-center">
                <div className="pl-4">
                    <h1 className="text-2xl font-bold text-orange-400">React.logo</h1>
                </div>

                <div className="pr-12 flex gap-6">
                    {
                        pages.map(page => (
                            <NavLink to={page.pageLink} key={page.id}>
                            <h1 onClick={() => setCurrentPageName(page.pageName)}>{page.pageName}</h1>
                            </NavLink>
                        ))
                    }
                </div>
            </nav>

            <section>
                <div className="text-2xl font-bold mt-5 text-center">
                    <h1>{currentPageName} Page</h1>
                </div>
            </section>
        </header>
    )
}

export default Navbar;