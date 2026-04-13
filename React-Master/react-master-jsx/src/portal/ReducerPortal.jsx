import ReactDom from 'react-dom';
import * as Reducer from '../hooks/reducer';

export const ReducerPortal = () => {

    return ReactDom.createPortal(
        <section><Reducer.Counter /></section>,document.getElementById("reducer-portal")
    )
}