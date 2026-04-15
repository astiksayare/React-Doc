import * as Component from '../index';
import * as API from '../../../api';

export const Main = () => {
    const list = API.Product;

    return (
        <Component.ContextProvider value={{list}}>
            <Component.Items.CartContainer />
        </Component.ContextProvider>
    )
}