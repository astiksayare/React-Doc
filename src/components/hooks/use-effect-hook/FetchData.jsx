
import { useState, useEffect } from "react";

const url = `https://jsonplaceholder.typicode.com/todos`;

   /*
    Fetching the data from the above url.

    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => (
        console.log(data, ' -- data')
    ))
    .catch((error) => (
        console.log(error, 'error')
    ));

    */

const FetchData = () => {

    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {

        // Creating the function to get the data from the url.
        async function getData() {
            console.log('call useEffect...');

            const response = await fetch(url);
            const todo = await response.json();

            if(todo && todo.length) setData(todo);
        }

        getData();
    }, [])

    // Note: mandatory to give the empty dependence -> [] in the useEffect else it will run so many time as many map method will render the data.
    
    return (
        <>
        {
            data.map(item => (
                <h4 style={{textAlign: 'center'}} key={item.id}>{item.id}. {item.title}</h4>
            ))
        }
        </>
    )
}

export default FetchData;