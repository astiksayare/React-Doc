
import * as proDetails from "./api/api";
import Card from "./component/Card";
import Product from "./component/Product";
import * as EventComponent from './events/index';



const displayFlex = {display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center', gap: '1rem'};

const App = () => {

    const numbers = [1, 2, 3, 4, 5];

    return (
        <div style={displayFlex}>

            <EventComponent.ClickEvent />
            <hr width='500'/>
            <EventComponent.CopyEvent />
            <section>
                {
                    numbers.map(number => (
                        <Card key={number} cardName={"Wedding Card"} value={number}>
                            <h1>My Card</h1>
                            <p>This is card number {number}</p>
                        </Card>
                    ))
                }
            </section>
            <main style={displayFlex}>
                <Product productDetails={proDetails.Product} />
            </main>
        </div>
    )
}

export default App;