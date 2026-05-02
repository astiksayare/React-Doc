import React from "react";

export const useFetch = (url: string) => {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(jsonData => setData(jsonData))
            .catch(err => console.log(err));

    }, [url]);

    return { data };
}