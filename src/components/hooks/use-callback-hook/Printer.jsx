
import React from "react";

const Printer = ({data}) => {

    const [dataVal, setData] = React.useState([]);

    React.useEffect(() => {
        console.log("Printer running...");
        setData(data);
    },[data]);

    return (
        <>
        {
            dataVal?.map((number) => (
                <li key={Math.random() * 5}>{number}</li>
            ))
        }
        </>
    )
}

export default Printer;