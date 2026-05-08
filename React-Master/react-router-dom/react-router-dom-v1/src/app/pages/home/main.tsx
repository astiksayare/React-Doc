import * as Router from 'react-router-dom';

export const Main = () => {

    const navigate = Router.useNavigate();

    return (
        <section
        className="h-full w-full bg-slate-950 text-white text-2xl font-bold flex justify-between items-center"
        >
            <div className='flex w-full justify-center items-center gap-2 flex-col'>
                <button onClick={() => navigate('/')} className='rounded-2xl border-white border-2 cursor-pointer hover:bg-blue-600 p-4'>Home</button>
                <button onClick={() => navigate(`/user/${101}`)} className='rounded-2xl border-white border-2 cursor-pointer hover:bg-blue-600 p-4'>User</button>
            </div>
        </section>
    )
}