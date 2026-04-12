import ReactDom from 'react-dom';
import { PropsDrilling } from '../hooks/context';
import { ContextApi } from '../hooks/context';

export const ContextPortal = () => {
    return ReactDom.createPortal(
        <section>
            {/* <PropsDrilling.Registration /> */}

            {/* Level-1 of context api */}
            {/* <ContextApi.ProviderConsumerContext.UserRegistration /> */}

            {/* Level-2 of context api */}
            <ContextApi.UseContextHook.UserRegistration />

        </section>, document.getElementById('context-portal')
    )
}