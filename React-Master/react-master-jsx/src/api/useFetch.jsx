
import React from "react";

export const useFetch = (api) => {
    const [data, setData] = React.useState([]);
    console.log('fetch component rendering...')
    React.useEffect(() => {
        const fetchData = async (path) => {
            const res = await fetch(path);
            const jsonData = await res.json();
            setData(jsonData);
        }
        console.log('inside fetch component')
        fetchData(api);

    }, []);

    return data;
}