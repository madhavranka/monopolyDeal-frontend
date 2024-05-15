import React from 'react';

interface WaitingScreenProps {
  host: string;
  isHost: boolean;
  players?: string[];
  isGameStarted?: boolean;
  startGame?: () => void;
  gameUrl: string;
}

const WaitingScreen: React.FC<WaitingScreenProps> = ({
  host,
  isHost,
  players,
  isGameStarted,
  startGame,
  gameUrl,
}) => {
  return isHost ? (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="bg-white p-8 rounded border border-gray-300 shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Waiting for you to start the game
        </h2>
        <h3 className="text-2xl font-semibold mb-4 text-center">{gameUrl}</h3>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Players:</h3>
          <ul className="list-inside list-decimal">
            {players?.map((player, index) => (
              <li key={index} className="text-gray-700">
                {player}
              </li>
            ))}
          </ul>
        </div>
        {!isGameStarted && (
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full"
            onClick={startGame}
          >
            Start Game
          </button>
        )}
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="bg-white p-8 rounded border border-gray-300 shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Waiting for {host}(host) to start the game
        </h2>
      </div>
    </div>
  );
};

export default WaitingScreen;
