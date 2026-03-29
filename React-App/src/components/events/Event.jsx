

const Event = () => {

    const copyHandler = () => {

        alert("Content Copied!")
    }

    const clickHandler = () => {
        
        console.log('You clicked me!');
    }


    return (
        <>
        <div style={{width: "100%", marginTop: '1rem', position: 'relative'}}>

            {/* onCopy */}
            <p onCopy={copyHandler}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis maiores voluptates ipsum aliquam dolorum et minus adipisci velit quia nemo.dae quo ratione, expedita voluptas tenetur aliquid nulla vel quasi nam voluptate adipisci modi illo inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quia est aliquam ad quam facilis dolor voluptas, quisquam fugiat laboriosam.</p>

            {/* onClick */}
            <button style={{marginTop: "1rem", position: 'absolute', right:"50%"}} onClick={clickHandler}>Click Me!</button>
        </div>
        </>
    )
}

export default Event;