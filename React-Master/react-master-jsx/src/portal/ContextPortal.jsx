import ReactDom from 'react-dom';
import { PropsDrilling } from '../hooks/context';

export const ContextPortal = () => {
    return ReactDom.createPortal(
        <section>
            <PropsDrilling.Registration />
        </section>, document.getElementById('context-portal')
    )
}