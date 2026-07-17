import React, { useState } from 'react';

function EventExamples() {
    const [count, setCount] = useState(5);

    const increment = () => {
        setCount(count + 1);
        alert("Hello! Member1");
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const sayWelcome = (msg) => {
        alert(msg);
    };

    const handleClick = (e) => {
        alert("I was clicked");
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <br />
            <button onClick={decrement}>Decrement</button>
            <br />
            <button onClick={() => sayWelcome("welcome")}>Say welcome</button>
            <br />
            <button onClick={handleClick}>Click on me</button>
        </div>
    );
}

export default EventExamples;