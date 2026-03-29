
/**
 * style css
 */
import './index.css';

/**
 * Header component
 */
import * as Views from './views';


export const Main = () => {

    return (
        <>
            <nav>
                <Views.Home />
                <Views.About />
                <Views.Contact />
                <Views.Service />
            </nav>
        </>
    )
}