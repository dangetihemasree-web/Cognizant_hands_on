import React from 'react';

function OddPlayers({ players }) {
    // Using array destructuring to pick 1st, 3rd, and 5th players
    const [first, , third, , fifth] = players;
    return (
        <div>
            <li>First : {first.name}1</li>
            <li>Third : {third.name}3</li>
            <li>Fifth : {fifth.name}5</li>
        </div>
    );
}
export default OddPlayers;