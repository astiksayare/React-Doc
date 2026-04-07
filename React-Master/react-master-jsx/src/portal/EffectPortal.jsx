
// Libraries import
import ReactDom from 'react-dom';

// Components import
import * as Hooks from '../hooks/index';

export const EffectPortal = () => {
    return ReactDom.createPortal(
        // <section><Hooks.Effect.Render /></section>, 
        <section><Hooks.Effect.ApiList /></section>,
        document.getElementById('effect-portal')
    );
}