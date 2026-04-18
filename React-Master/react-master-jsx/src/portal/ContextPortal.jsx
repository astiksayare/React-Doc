import ReactDom from 'react-dom';
import * as Context from '../hooks/context';

export const ContextPortal = () => {
    return ReactDom.createPortal(
        <section>
            {/* <PropsDrilling.Registration /> */}
            <Context.PropsDrilling.Registration />
            <hr />
            {/* Level-1 of context api */}
            <Context.ContextApi.ProviderConsumerContext.UserRegistration />
            <hr />
            {/* Level-2 of context api */}
            <Context.ContextApi.UseContextHook.UserRegistration />
            <hr />
            {/* Level-3 of context api */}
            <Context.ContextApi.OptimizedContext.Registration />

        </section>, document.getElementById('context-portal')
    )
}