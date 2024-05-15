// App.tsx

import React from 'react';
import Game from './components/Game'; // Import the Game component
import GameTable, { Player } from './components/GameTable';
import PlayerArea from './components/PlayerArea';

const App: React.FC = () => {
  const players: Player[] = [
    {
      playerId: 1,
      playerName: 'Player 1',
      cards: ['card1', 'card2', 'card3'],
      // properties: ['property1', 'property2'],
      totalCash: 80,
      cardsPlayed: 0,
      receivedCards: [],
      cashPile: {
        ten: 1,
        five: 0,
        four: 2,
        three: 4,
        two: 1,
        one: 5,
      },
      properties: {
        darkBlue: [],
        green: [],
        red: [],
        yellow: [],
        black: [],
        lightGreen: [],
        lightBlue: [],
        orange: [],
        pink: [],
        brown: [],
      },
    },
    {
      playerId: 2,
      playerName: 'Player 2',
      cards: ['card1', 'card2', 'card3'],
      // properties: ['property1', 'property2'],
      totalCash: 100,
      cardsPlayed: 0,
      receivedCards: [],
      cashPile: {
        ten: 0,
        five: 0,
        four: 2,
        three: 2,
        two: 1,
        one: 0,
      },
      properties: {
        darkBlue: [],
        green: [],
        red: [],
        yellow: [],
        black: [],
        lightGreen: [],
        lightBlue: [],
        orange: [],
        pink: [],
        brown: [],
      },
    },
    {
      playerId: 3,
      playerName: 'Player 3',
      cards: ['card1', 'card2', 'card3'],
      // properties: ['property1', 'property2'],
      totalCash: 40,
      cardsPlayed: 0,
      receivedCards: [],
      cashPile: {
        ten: 0,
        five: 0,
        four: 2,
        three: 1,
        two: 1,
        one: 2,
      },
      properties: {
        darkBlue: [],
        green: [],
        red: [],
        yellow: [],
        black: [],
        lightGreen: [],
        lightBlue: [],
        orange: [],
        pink: [],
        brown: [],
      },
    },
    {
      playerId: 4,
      playerName: 'Player 4',
      cards: ['card1', 'card2', 'card3'],
      // properties: ['property1', 'property2'],
      totalCash: 100,
      cardsPlayed: 0,
      receivedCards: [],
      cashPile: {
        ten: 0,
        five: 2,
        four: 0,
        three: 4,
        two: 1,
        one: 1,
      },
      properties: {
        darkBlue: [],
        green: [],
        red: [],
        yellow: [],
        black: [],
        lightGreen: [],
        lightBlue: [],
        orange: [],
        pink: [],
        brown: [],
      },
    },
    // {
    //   id: 5,
    //   name: 'Player 2',
    //   hand: ['card4', 'card5', 'card6'],
    //   properties: ['property3', 'property4'],
    //   cash: 150,
    // },
    // Add more players as needed
  ];

  const currentPlayer = {
    id: 1,
    name: 'Player 1',
    hand: ['card1', 'card2', 'card3'],
    properties: ['property1', 'property2'],
    cash: 100,
  };
  return (
    <div>
      {/* Render the Game component */}
      {/* <PlayerArea
        player={players[0]}
        isCurrentPlayer={true}
        position={{ x: 400, y: 0 }}
      /> */}
      <Game></Game>
      {/* <GameTable
        players={players}
        currentPlayer={currentPlayer}
        playerId={2}
      ></GameTable> */}
    </div>
  );
};

export default App;
