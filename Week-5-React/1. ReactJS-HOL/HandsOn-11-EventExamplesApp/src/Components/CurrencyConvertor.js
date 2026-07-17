import React, { useState } from 'react';

function CurrencyConvertor() {
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const converted = amount * 80; // Assuming a conversion rate
        alert("Converting to Euro Amount is " + converted);
    };

    return (
        <div>
            <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
            <form onSubmit={handleSubmit}>
                <label>Amount: </label>
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                />
                <br />
                <label>Currency: </label>
                <input type="text" value="Euro" readOnly />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CurrencyConvertor;