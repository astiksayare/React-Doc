import React from "react";

const styles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}


const PassingFunctionInsideUseState = () => {

    const [name, setName] = React.useState(() => {
        
        const savedName = localStorage.getItem("name");
        return savedName ? JSON.parse(savedName) : "";

    });


    React.useEffect(() => {

        localStorage.setItem("name", JSON.stringify(name));

    }, [name]);


    const handleChange = (e) => {

        setName(e.target.value);
    }

    const handleClear = () => setName("");


    return (
        <div style={styles}>
            <h1>Your Name: {name}</h1>
            <div style={{ marginTop: '1rem' }}>
                <input style={{ padding: '.5rem', marginRight: '.5rem' }} type="text" value={name} onChange={handleChange} placeholder="Enter your name..." />
                <button onClick={handleClear}>clear Name</button>
            </div>
        </div>
    )
}

export default PassingFunctionInsideUseState;