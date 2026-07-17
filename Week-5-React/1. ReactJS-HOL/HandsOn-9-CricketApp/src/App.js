import React from 'react';
import ListofPlayers from './Components/ListofPlayers';
import Scorebelow70 from './Components/Scorebelow70';
import OddPlayers from './Components/OddPlayers';
import EvenPlayers from './Components/EvenPlayers';
import ListofIndianPlayers from './Components/ListofIndianPlayers';

function App() {
  const flag = true; // Change this to false to see the other view[cite: 1]
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers]; // Merge feature[cite: 1]
  const players = [{name: "Sachin"}, {name: "Dhoni"}, {name: "Virat"}, {name: "Rohit"}, {name: "Yuvaraj"}, {name: "Raina"}];

  if (flag === false) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Odd Players</h1>
        <OddPlayers players={players} />
        <hr />
        <h1>Even Players</h1>
        <EvenPlayers players={players} />
        <hr />
        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers players={IndianPlayers} />
      </div>
    );
  }
}
export default App;