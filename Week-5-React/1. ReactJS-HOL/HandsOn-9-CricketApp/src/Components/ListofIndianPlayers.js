import React from 'react';

function ListofIndianPlayers({ players }) {
    return (
        <ul>
            {players.map((name, index) => (
                <li key={index}>Mr. {name}</li>
            ))}
        </ul>
    );
}
export default ListofIndianPlayers;