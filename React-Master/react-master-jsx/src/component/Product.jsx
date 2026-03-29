

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
                                        <div>
                                            <h1>Mobile</h1>
                                            {category.mobile.map(items => (
                                                <div key={items.mobileId}>
                                                    <ul>
                                                        {items.mobileName}
                                                        <li>{items.price}</li>
                                                        <li>{items.color}</li>
                                                        <li>{items.modelNumber}</li>
                                                    </ul>
                                                </div>
                                            ))}
                                            
                                        </div>

                                        <div>
                                            <h1>Television</h1>
                                            {
                                                category.television.map(items => (
                                                    <div key={items.televisionId}>
                                                        <ul>
                                                            {items.televisionName}
                                                            <li>{items.price}</li>
                                                        </ul>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                       <div>
                                            <h2>Laptop</h2>
                                            {
                                                category.laptop.map(items => (
                                                    <div key={items.laptopId}>
                                                        <ul>
                                                            {items.laptopName}
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