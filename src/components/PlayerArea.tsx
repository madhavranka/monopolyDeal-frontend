import React from 'react';
import PlayerHand from './PlayerHands';
import PropertyPile from './PropertyPile';
import CashPile from './CashPile';
import { Player } from './GameTable';

interface PlayerAreaProps {
  player: Player;
  isCurrentPlayer: boolean;
  position: { x: number; y: number };
  playerId: number;
  playTurn: (card: string, action: string) => void;
}

const PlayerArea: React.FC<PlayerAreaProps> = ({
  playerId,
  player,
  isCurrentPlayer,
  position,
  playTurn,
}) => {
  return (
    <div
      className="absolute"
      style={{
        top: position.y,
        left: position.x,
        // transform: 'translate(-50%, -50%)', // Center the player area
      }}
    >
      <h2 className="text-lg font-semibold mb-2">{player.playerName}</h2>
      <div className="flex flex-col items-center">
        {playerId === player.playerId && (
          <PlayerHand cards={player.cards} playTurn={playTurn} />
        )}
        <PropertyPile properties={player.properties} />
        <CashPile cashPile={player.cashPile} totalCash={player.totalCash} />
        {isCurrentPlayer && (
          <div className="bg-blue-500 text-white p-2 rounded mt-2">
            Your Turn
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerArea;
