


const Card = ({children, cardName, value}) => {

    return (
        <div>
            {children}
            <h1>{value} {cardName}</h1>
        </div>
    )
}

export default Card;