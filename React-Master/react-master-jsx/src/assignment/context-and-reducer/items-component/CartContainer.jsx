import * as Item from '../items-component'
export const CartContainer = ({itemCount, countAction}) => {

    return (
       <section>
            <div style={{width: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '1rem', gap: '1rem'}}>
                <h1>Total Items Added To Card: {itemCount.count}</h1>
                <button className="btn" onClick={() => countAction({type: "RESET"})}>0</button>
                <button className="btn" onClick={() => countAction({type: "DEC"})}>-</button>  
                <hr width="500"/>
            </div>
            
            <Item.Cart />
       </section>
    )
}