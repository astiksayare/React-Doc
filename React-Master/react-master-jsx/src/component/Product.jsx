
import './component.css';


const Product = ({productDetails}) => {

    return (
        <>
            <h1 style={{textAlign: "center"}}>Products</h1>

            <section>
                {
                    productDetails.map(items => (
                        <div key={items.productId}>
                            {
                                items?.productCategory.map(category => (
                                    <div key={category} style={{display: 'flex', gap: '3rem', justifyContent: "center", alignItems: 'start'}}>
                                        <div className='container'>
                                            <h1>Mobile</h1>
                                            {category.mobile.map(items => (
                                                <div key={items.mobileId}>
                                                    <ul>
                                                        <h3>{items.mobileName}</h3>
                                                        <li>{items.price}</li>
                                                        <li>{items.color}</li>
                                                        <li>{items.modelNumber}</li>
                                                    </ul>
                                                </div>
                                            ))}
                                            
                                        </div>

                                        <div className='container'>
                                            <h1>Television</h1>
                                            {
                                                category.television.map(items => (
                                                    <div key={items.televisionId}>
                                                        <ul>
                                                            <h3>{items.televisionName}</h3>
                                                            <li>{items.price}</li>
                                                        </ul>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                       <div className='container'>
                                            <h2>Laptop</h2>
                                            {
                                                category.laptop.map(items => (
                                                    <div key={items.laptopId}>
                                                        <ul>
                                                            <h3>{items.laptopName}</h3>
                                                            <li>{items.price}</li>
                                                        </ul>
                                                    </div>
                                                ))
                                            }
                                       </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default Product;