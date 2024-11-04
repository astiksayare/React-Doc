

import React from "react";

export const useFetch = (url) => {

    const [data, setData] = React.useState([]);

    fetch(url)
    .then((res) => {
        return res.json()
    })
    .then( data => (
        setData(data)
    ))
    .catch((err) => (
        console.log(err)
    ))

    return data;

}