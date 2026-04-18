import React from "react";

export const useFetch = (url) => {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
       
        // Option 1
        /* 
        const fetchData = async () => {
            const res = await fetch(url);
            const jsonData = await res.json();
            console.log(jsonData)
            setData(jsonData);
        }

       fetchData();

        */

       // Option 2
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
       
    }, []);

    return [data];
}