
import ReactDom from "react-dom";
import * as Hook from '../hooks';

export const CustomPortal = () => {

    return ReactDom.createPortal(
        <section>
            <h1><Hook.customHook.UserList /></h1>
        </section>, document.getElementById('custom-portal')
    )
}