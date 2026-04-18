
import ReactDom from "react-dom";

export const CustomPortal = () => {

    return ReactDom.createPortal(
        <section>
            <h1>Hello This is a Custom Portal</h1>
        </section>, document.getElementById('custom-portal')
    )
}