
import * as proDetails from "./api/api";
import Card from "./component/Card";
import Product from "./component/Product";

const App = () => {

    const numbers = [1, 2, 3, 4, 5];

    return (
        <div style={{display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center'}}>

            <section>
                {
                    numbers.map(number => (
                        <Card key={number} cardName={"Astik"} value={number}>
                            <h1>My Card</h1>
                            <p>This is card number {number}</p>
                        </Card>
                    ))
                }
            </section>
            <hr width='500'/>
            <main>
                <Product productDetails={proDetails.Product} />
            </main>
        </div>
    )
}

export default App;