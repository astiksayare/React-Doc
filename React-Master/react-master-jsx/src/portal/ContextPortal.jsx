import ReactDom from 'react-dom';

export const ContextPortal = () => {
    return ReactDom.createPortal(
        <section>
            <h1>This is a Context Portal</h1>
        </section>, document.getElementById('context-portal')
    )
}