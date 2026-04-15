import * as Component from '../index';

export const Main = () => {

    return (
        <Component.ContextProvider value={{}}>
            <section>
                <Component.Items.Cart />
            </section>
        </Component.ContextProvider>
    )
}