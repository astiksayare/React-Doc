
// Libraries import
import ReactDom from 'react-dom';

// Components import
import * as Hooks from '../hooks/index';

export const EffectPortal = () => {
    return ReactDom.createPortal(
        <section><Hooks.Effect.Render /></section>, 
        document.getElementById('effect-portal')
    );
}