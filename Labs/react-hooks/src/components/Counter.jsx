import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [evenCounter, setEvenCounter] = useState(0);

    useEffect(() => {
        console.log("I'm just a random log.");
    }, [evenCounter])

    const addOne = () => {
        if (counter % 2 === 0) {
            setEvenCounter(evenCounter + 1)
        }
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <h1>{evenCounter}</h1>
            <button onClick={addOne}>+1</button>
        </div>
    )
}

export default Counter