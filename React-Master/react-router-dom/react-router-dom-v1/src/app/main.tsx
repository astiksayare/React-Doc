import * as App from '@/app';

export const Main = () => {

    return (
        <section
        className='w-full h-full flex flex-col justify-between'
        >
            <App.Layout.Header.Main />
             <App.Routes.AppRoutes />
            <App.Layout.Footer.Main />
        </section>
    )
}