import React from 'react';

function EvenPlayers({ players }) {
    // Using array destructuring to pick 2nd, 4th, and 6th players
    const [, second, , fourth, , sixth] = players;
    return (
        <div>
            <li>Second : {second.name}2</li>
            <li>Fourth : {fourth.name}4</li>
            <li>Sixth : {sixth.name}6</li>
        </div>
    );
}
export default EvenPlayers;