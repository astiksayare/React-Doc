
import CssStyleModule  from "./CssModule.module.css";

const CssModule = () => {

    return (
    <div className="container">
        <h1 className={CssStyleModule.heading}>Hello World</h1>
        <p>This is a Css Module Style Component in React...</p>
    </div>
    )
}

export default CssModule;