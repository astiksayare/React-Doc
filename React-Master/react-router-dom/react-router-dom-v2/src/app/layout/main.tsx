import * as Layout from './index';
import * as Router from 'react-router-dom';

export const Main = () => {

    return (
        <section className='w-full h-full'>
            <Layout.Header.Main />
                <main className='h-[80%] w-full text-center flex justify-center items-center gap-4'>
                    <Router.Outlet />
                </main>
            <Layout.Footer.Main />
        </section>
    )
}