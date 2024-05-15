// PlayerHand.tsx
import React from 'react';
// import { playTurn } from '../utils';

interface PlayerHandProps {
  cards: string[];
  playTurn: (card: string, action: string) => void;
}

const PlayerHand: React.FC<PlayerHandProps> = ({ cards, playTurn }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-gray-200 p-2 rounded"
          onClick={() => {
            const [type, property] = card.split('-');
            console.log('Type:', type);
            console.log('Property:', property);
            playTurn(card, 'play');
          }}
        >
          {card}
        </div>
      ))}
    </div>
  );
};

export default PlayerHand;
