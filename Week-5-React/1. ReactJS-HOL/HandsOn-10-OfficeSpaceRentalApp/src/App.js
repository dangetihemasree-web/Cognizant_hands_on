import React from 'react';
import OfficeSpace from './Components/OfficeSpace';

function App() {
    const element = "Office Space";
    const officeData = { Name: "DBS", Rent: 50000, Address: 'Chennai' };

    return (
        <div>
            {/* Displaying the heading */}
            <h1>{element}, at Affordable Range</h1>
            
            {/* Displaying the image with specific attributes */}
            <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400" 
                alt="Office Space" 
                width="25%" 
                height="25%" 
            />
            
            {/* Displaying the component with office data */}
            <OfficeSpace office={officeData} />
        </div>
    );
}

export default App;