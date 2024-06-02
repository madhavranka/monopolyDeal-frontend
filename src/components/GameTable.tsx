import React from 'react';
import PlayerArea from './PlayerArea';
// Card.ts
interface Card {
  name: string;
  // Add other properties as needed
}

// Property.ts
// interface Property {
//   name: string;
//   // Add other properties as needed
// }

// Player.ts
// export interface Player {
//   id: number;
//   name: string;
//   hand: string[];
//   properties: string[];
//   cash: number;
// }

export type Property = {
  color: string;
  numberOfCards: number;
  numberOfHouse: number;
  numberOfHotel: number;
  isCompleteSet: boolean;
  wildCards: string[];
};

export type cashPile = {
  ten: number;
  five: number;
  four: number;
  three: number;
  two: number;
  one: number;
};

export type Properties = {
  darkBlue: Property[];
  green: Property[];
  red: Property[];
  yellow: Property[];
  black: Property[];
  lightGreen: Property[];
  lightBlue: Property[];
  orange: Property[];
  pink: Property[];
  brown: Property[];
};

export type Player = {
  playerId: number;
  cards: string[];
  playerName: string;
  cashPile: cashPile;
  properties: Properties;
  totalCash: number;
  cardsPlayed: number;
  receivedCards: string[];
};

// GameState.ts
interface GameState {
  players: Player[];
  currentPlayer: Player;
  discardPile: string[];
  playerId: number;
  // Add other properties as needed
}

interface GameTableProps {
  playTurn: (card: string, action: string) => void;
  gameState: GameState;
}

const GameTable: React.FC<GameTableProps> = ({ playTurn, gameState }) => {
  console.log(gameState);
  const players: Player[] = gameState.players;
  const currentPlayer: Player = gameState.currentPlayer;
  const playerId: number = gameState.playerId;
  const getNextPlayerId = (pId: number) => {
    return pId === players.length - 1 ? 0 : pId + 1;
  };

  // const getPlayerPosition = (
  //   positions: { x: number; y: number }[],
  //   index: number
  // ) => {
  //   return positions[index];
  // };

  // function calculatePlayerPositions(numPlayers: number) {
  //   const positions = [];

  //   switch (numPlayers) {
  //     case 2:
  //       positions.push({ x: 50, y: 10 }); // Player 1
  //       positions.push({ x: 50, y: 90 }); // Player 2
  //       break;
  //     case 3:
  //       positions.push({ x: 50, y: 10 }); // Player 1
  //       positions.push({ x: 10, y: 90 }); // Player 2
  //       positions.push({ x: 90, y: 90 }); // Player 3
  //       break;
  //     case 4:
  //       positions.push({ x: 10, y: 50 }); // Player 1
  //       positions.push({ x: 90, y: 50 }); // Player 2
  //       positions.push({ x: 50, y: 10 }); // Player 3
  //       positions.push({ x: 50, y: 90 }); // Player 4
  //       break;
  //     case 5:
  //       positions.push({ x: 50, y: 20 }); // Player 1
  //       positions.push({ x: 20, y: 70 }); // Player 2
  //       positions.push({ x: 80, y: 70 }); // Player 3
  //       positions.push({ x: 30, y: 90 }); // Player 4
  //       positions.push({ x: 70, y: 90 }); // Player 5
  //       break;
  //     default:
  //       // Handle other cases
  //       break;
  //   }

  //   return positions;
  // }
  // const positions: { x: number; y: number }[] = calculatePlayerPositions(
  //   players.length
  // );
  let positions: { x: number; y: number }[] = new Array(players.length);
  let nextPlayerId: number = getNextPlayerId(playerId);

  switch (players.length) {
    case 2:
      positions[playerId] = { x: 50, y: 90 };
      positions[nextPlayerId] = { x: 50, y: 10 };
      break;
    case 3:
      positions[playerId] = { x: 90, y: 90 };
      positions[nextPlayerId] = { x: 50, y: 10 };
      positions[getNextPlayerId(nextPlayerId)] = { x: 10, y: 90 };

      break;
    case 4:
      positions = [
        { x: 10, y: 50 },
        { x: 90, y: 50 },
        { x: 50, y: 10 },
        { x: 50, y: 90 },
      ];
      break;
    default:
      // Handle other cases
      break;
  }

  return (
    <div className="relative">
      {players.map((player, index) => {
        // const position = getPlayerPosition(positions, index);
        return (
          <PlayerArea
            key={player.playerId}
            player={player}
            isCurrentPlayer={player.playerId === currentPlayer.playerId}
            position={positions[index]}
            playerId={playerId}
            playTurn={playTurn}
          />
        );
      })}
    </div>
  );
};

export default GameTable;
