export const playTurn = (
  card: string,
  action: string,
  gameId: string,
  playerName: string,
  ws: WebSocket
) => {
  const message = {
    type: 'playTurn',
    gameId: gameId,
    playerName: playerName,
    turnData: {
      action,
      playerName: playerName,
      card,
      useAsCash: '',
      amount: 0,
      playedWithDoubleRent: false,
      color: '',
      playerToAct: 0,
      pileIndex: 0,
      takeCard: '',
      giveCard: '',
    },
  };
  if (ws) {
    ws.send(JSON.stringify(message));
  }
};
