import React from "react";

export const InputField = () => {

    const inputRef = React.useRef(); // by default, empty useRef will be undefined
    const buttonRef = React.useRef();
   
    const handleHideAndShow = () => {
        if(buttonRef.current.value === 'Hide') {
            inputRef.current.style.display = 'none';
            buttonRef.current.value = 'Show';
        }else {
            buttonRef.current.value = "Hide";
            inputRef.current.style.display = 'block';
        }
    }

    const handleClick = () => {
        console.log(inputRef); // {current: input}

         // focus on the input field
        inputRef.current.focus();

        // update input field value
        inputRef.current.value = 'Astik';

        // change color
        inputRef.current.style.color = 'Red';

        // bold font
        inputRef.current.style.fontWeight = 'bold';
    }

    console.log('Rendered only once...');
    return (
        <section>
            <input type="button" value="Add User" onClick={handleClick} />
            <input type="button" ref={buttonRef} value={'Hide'} onClick={handleHideAndShow}/>
            <input type="text" ref={inputRef} />
        </section>
    )
}