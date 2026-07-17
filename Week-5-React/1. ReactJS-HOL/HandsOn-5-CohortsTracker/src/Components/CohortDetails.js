import React from 'react';
import styles from './CohortDetails.module.css'; // Import the CSS Module

function CohortDetails({ cohortName, status, startedOn, coach, trainer }) {
    return (
        <div className={styles.box}> {/* Apply the 'box' class */}
            {/* Conditional inline styling for the color[cite: 2] */}
            <h3 style={{ color: status === 'ongoing' ? 'green' : 'blue' }}>
                {cohortName}
            </h3>
            <dl>
                <dt>Started On</dt>
                <dd>{startedOn}</dd>
                <dt>Current Status</dt>
                <dd>{status}</dd>
                <dt>Coach</dt>
                <dd>{coach}</dd>
                <dt>Trainer</dt>
                <dd>{trainer}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;