
import './component.css';


const Card = ({children, cardName, value}) => {

    return (
        <div className='container'>
            {children}
            <h3>{cardName} {value}</h3>
            <hr width='500'/>
        </div>
    )
}

export default Card;