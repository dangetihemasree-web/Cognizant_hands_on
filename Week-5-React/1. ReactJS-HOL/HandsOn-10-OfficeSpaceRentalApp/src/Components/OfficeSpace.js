import React from 'react';
import './OfficeSpace.css';

function OfficeSpace({ office }) {
    // Determine color class based on rent
    const colorClass = office.Rent <= 60000 ? 'textRed' : 'textGreen';

    return (
        <div>
            <h1>Name: {office.Name}</h1>
            <h3 className={colorClass}>Rent: Rs. {office.Rent}</h3>
            <h3>Address: {office.Address}</h3>
        </div>
    );
}

export default OfficeSpace;