import React from 'react';
import '../App.css';

interface GameFormProps {
  playerName: string;
  setPlayerName: React.Dispatch<React.SetStateAction<string>>;
  gameId: string;
  setGameId: React.Dispatch<React.SetStateAction<string>>;
  createGame: () => void;
  joinGame: () => void;
  startGame: () => void;
  isGameStarted: boolean;
}

const GameForm: React.FC<GameFormProps> = ({
  playerName,
  setPlayerName,
  gameId,
  setGameId,
  createGame,
  joinGame,
  startGame,
  isGameStarted,
}) => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="bg-white p-8 rounded border border-gray-300 shadow-md">
        <div className="grid grid-cols-2 gap-4">
          {/* Create Game Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createGame();
            }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Create Game
            </h2>
            <div className="mb-4">
              <label
                htmlFor="playerName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Player Name
              </label>
              <input
                id="playerName"
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="border border-gray-300 rounded-md w-full px-3 py-2 text-sm"
                placeholder="Enter your name"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full"
            >
              Create Game
            </button>
          </form>

          {/* Join Game Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              joinGame();
            }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Join Game
            </h2>
            <div className="mb-4">
              <label
                htmlFor="gameId"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Game ID
              </label>
              <input
                id="gameId"
                type="text"
                value={gameId}
                onChange={(e) => setGameId(e.target.value)}
                className="border border-gray-300 rounded-md w-full px-3 py-2 text-sm"
                placeholder="Enter game ID"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full"
            >
              Join Game
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GameForm;
