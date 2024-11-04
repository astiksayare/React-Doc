

const ProductList = () => {

    const productList = [
        {
            id: 1, 
            phone: 'Realme 5 pro',
            price: '$220'
        },

        {
            id: 2, 
            phone: 'Samsung M34',
            price: '$210'
        },

        {
            id: 1, 
            phone: 'Realme C53',
            price: '$150'
        },

    ]
    
    return (
        <>
        {
            productList.map(item => (
                <div key={item.id}>
                    <h1>Phone: {item.phone}</h1>
                    <h1>Price: {item.price}</h1>
                </div>
            ))
        }
        </>
    )
}

export default ProductList;