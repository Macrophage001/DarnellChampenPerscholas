import React, { useRef } from 'react'

const Input = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Input