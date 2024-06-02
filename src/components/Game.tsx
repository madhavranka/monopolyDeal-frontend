import React, { useEffect, useState } from 'react';
import PlayerHand from './PlayerHand';
import PlayerProperties from './PlayerProperties';
import GameInfo from './GameInfo';
import GameForm from './GameForm';
import '../styles.css';
import WaitingScreen from './WaitingScreen';
import GameTable from './GameTable';

const Game: React.FC = () => {
  const [gameState, setGameState] = useState<any>({});
  const [playerName, setPlayerName] = useState<string>('');
  const [gameId, setGameId] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [waitingToStart, setWaitingToStart] = useState(false);
  const [isHost, setIsHost] = useState(false);
  const [host, setHost] = useState('');
  const [players, setPlayers] = useState<string[]>([]);
  const [gameUrl, setGameUrl] = useState('');

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000');
    setWs(socket);

    // Initialize WebSocket connection when component mounts
    socket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    // Listen for messages from the WebSocket server
    socket.onmessage = (event) => {
      console.log('Received message:', event.data);
      const data = JSON.parse(event.data);
      const newState = { ...gameState, ...(data.data ?? {}) };
      console.log(newState);
      setGameState((gameState: any) => {
        return newState;
      });
      setGameStateStarted(data);
      console.log(`Game state is ${gameState}`);
    };

    const setGameStateStarted = (data: {
      type: string;
      data?: any;
      gameUrl?: string;
      host?: string;
    }) => {
      if (data.type === 'gameStarted') {
        setIsGameStarted(true);
        console.log(`Starting of the game ${gameState}`);
      }
      if (data.type === 'gameCreated') {
        console.log(`Host is ${data.host}`);
        setIsHost(true);
        setHost((host) => {
          return host !== '' ? data.host ?? '' : host;
        });
        setPlayers((players) => [...players, data.host ?? '']);
        setWaitingToStart(true);
        setGameUrl((gameUrl) => data.gameUrl ?? '');
        let g: string | undefined = data.gameUrl?.split('/')[4];
        setGameId((gameId) => g ?? '');
        console.log(isHost === true);
      }
      if (data.type === 'playerJoined') {
        setHost(data?.data?.host ?? '');
        setWaitingToStart(true);
        setPlayers((players) => [...players, data?.data?.player ?? '']);
      }
    };

    const setPlayerNames = (data: { player?: string }) => {
      if (data.player) {
        setPlayers((players) => [...players, data.player ?? '']);
      }
    };

    // Cleanup WebSocket connection when component unmounts
    return () => {
      socket.close();
    };
  }, []);

  const createGame = () => {
    const message = {
      type: 'createGame',
      playerName: playerName,
      gameId,
    };
    if (ws) {
      ws.send(JSON.stringify(message));
    }
  };

  const joinGame = () => {
    const message = {
      type: 'joinGame',
      gameId: gameId,
      playerName: playerName,
    };
    if (ws) {
      ws.send(JSON.stringify(message));
    }
  };

  const startGame = () => {
    const message = {
      type: 'startGame',
      gameId: gameId,
      playerName: playerName,
    };
    if (ws) {
      ws.send(JSON.stringify(message));
    }
    // setIsGameStarted(true);
  };

  const playTurn = (
    card: string,
    action: string,
    useAsCash: boolean = false,
    pileIndex: number = 0,
    color?: string,
    playedWithDoubleRent: boolean = false
  ) => {
    const message = {
      type: 'playTurn',
      gameId: gameId,
      playerName: playerName,
      turnData: {
        action,
        playerName: playerName,
        card,
        useAsCash,
        amount: 0,
        playedWithDoubleRent,
        color,
        playerToAct: 0,
        pileIndex,
        takeCard: '',
        giveCard: '',
      },
    };
    if (ws) {
      ws.send(JSON.stringify(message));
    }
  };

  const pass = () => {
    const message = {
      type: 'pass',
      gameId: gameId,
      playerName: playerName,
    };
    if (ws) {
      ws.send(JSON.stringify(message));
    }
  };

  return (
    <div>
      <h1>Monopoly Deal</h1>
      {isGameStarted ? (
        <div>
          {/* <PlayerHand cards={gameState?.cards} />
          <PlayerProperties properties={gameState?.properties} />
          <GameInfo
            currentPlayer={gameState?.currentPlayer}
            // gamePhase={gameState?.gamePhase}
          /> */}
          <GameTable playTurn={playTurn} gameState={gameState}></GameTable>
        </div>
      ) : waitingToStart ? (
        <WaitingScreen
          host={host}
          isHost={isHost}
          players={players}
          startGame={startGame}
          isGameStarted={isGameStarted}
          gameUrl={gameUrl}
        ></WaitingScreen>
      ) : (
        <GameForm
          playerName={playerName}
          setPlayerName={setPlayerName}
          gameId={gameId}
          setGameId={setGameId}
          createGame={createGame}
          joinGame={joinGame}
          startGame={startGame}
          isGameStarted={false}
        />
      )}
    </div>
  );
};

export default Game;
