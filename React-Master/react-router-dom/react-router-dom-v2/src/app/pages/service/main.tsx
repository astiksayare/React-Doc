import * as Pages from '@/app/pages';

export const Main = () => {

    return (
        <section
        className='flex flex-col gap-4 font-bold'
        >
            <h1>Welcome to Service Page</h1>
            <Pages.Counter.Main />
        </section>
    )
}