import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div className="App">
      <h1>Cohorts Details</h1>
      
      {/* First Cohort */}
      <CohortDetails 
        cohortName="INTADMDF10 -.NET FSD" 
        status="scheduled" 
        startedOn="22-Feb-2022" 
        coach="Aathma" 
        trainer="Jojo Jose" 
      />
      
      {/* Second Cohort */}
      <CohortDetails 
        cohortName="ADM21JF014 -Java FSD" 
        status="ongoing" 
        startedOn="10-Sep-2021" 
        coach="Apoorv" 
        trainer="Elisa Smith" 
      />
      
      {/* Third Cohort */}
      <CohortDetails 
        cohortName="CDBJF21025 -Java FSD" 
        status="ongoing" 
        startedOn="24-Dec-2021" 
        coach="Aathma" 
        trainer="John Doe" 
      />
    </div>
  );
}

export default App;