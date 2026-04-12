import ReactDom from 'react-dom';
// import { PropsDrilling } from '../hooks/context';
// import { ContextApi } from '../hooks/context';
// import * as OptimizedContext from '../hooks/context/context-api/level-3-optimized-context/'
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