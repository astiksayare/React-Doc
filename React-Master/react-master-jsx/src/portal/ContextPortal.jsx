import ReactDom from 'react-dom';
import { PropsDrilling } from '../hooks/context';
import { ContextApi } from '../hooks/context';

export const ContextPortal = () => {
    return ReactDom.createPortal(
        <section>
            {/* <PropsDrilling.Registration /> */}
            <ContextApi.ProviderConsumerContext.UserRegistration />
        </section>, document.getElementById('context-portal')
    )
}