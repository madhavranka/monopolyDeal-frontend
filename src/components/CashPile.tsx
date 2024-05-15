// CashPile.tsx
import React from 'react';
import { cashPile } from './GameTable';

interface CashPileProps {
  cashPile: cashPile;
  totalCash: number;
}

const CashPile: React.FC<CashPileProps> = ({ totalCash, cashPile }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <h3 className="text-md font-semibold mb-2">Cash Pile</h3>
      <div className="bg-blue-200 p-2 rounded">{totalCash}</div>
    </div>
  );
};

export default CashPile;
