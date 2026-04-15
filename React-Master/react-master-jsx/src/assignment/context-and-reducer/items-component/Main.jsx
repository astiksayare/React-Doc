import * as Component from '../index';
import * as API from '../../../api';
import React from 'react';

export const Main = () => {
    const list = API.Product;
    const [state, dispatch] = React.useReducer(Component.quantityReducer, Component.initialCount);

    return (
        <Component.ContextProvider value={{list, dispatch}}>
            <Component.Items.CartContainer itemCount={state} countAction={dispatch}/>
        </Component.ContextProvider>
    )
}