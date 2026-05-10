import * as Router from 'react-router-dom';

export const Main = () => {

    const navigate = Router.useNavigate();

    return (
        <>
            <section
            className="w-full flex flex-col gap-4 justify-center items-center"
            >
                <button
                className="bg-blue-500 text-white w-25 h-14 rounded-md cursor-pointer border-0 font-semibold"
                onClick={() => navigate('/service/count')}
                >View Count</button>
                <Router.Outlet />
            </section>
        </>
    )
}