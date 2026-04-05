import React from 'react';

export const ShoppingList = () => {

    const [productList, setProductList] = React.useState([]);

    const handleList = () => {
        const productId = Math.floor(Math.random() * 100);
        const productName = document.getElementById('productName');
        const productPrice = document.getElementById('amount');

        if(productName.value != "" && productPrice.value != "") {
            setProductList([...productList, {id: productId, name: productName.value, price: productPrice.value}]);
            productName.value = "";
            productPrice.value = "";
            productName.focus();
        }
    }
    return (
        <section className='flex mt-1'>
            <div className='display_flex'>
                <label>Product: </label> <input type="text" placeholder='Enter the product name...' id="productName"/>
            </div>
            <div className='display_flex'>
                <label>Amount: </label> <input type="text" placeholder='Enter the amount...' id="amount"/>
            </div>

            <div className='display_flex'>
                <button className='btn' onClick={handleList}>Submit</button>
                
            </div>

            <main className='flex-column'>
                <hr width="500"/>
                {
                    productList.map(items => (
                        <div key={items.id}>
                            <h1>Name: {items.name}</h1>
                            <h1>Price: {items.price}</h1>
                            <hr width='500'/>
                        </div>
                    ))
                }
            </main>
        </section>
    )
}