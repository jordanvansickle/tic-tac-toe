import React from 'react';
import Game from './Game';
import ScoreBoard from './ScoreBoard';

function TicTacToe() {
	const [gameId, setGameId] = React.useState(1);
	const [winnerTracker, setWinnerTracker] = React.useState([]);
	return (
	<>
		<ScoreBoard gamesPlayed={winnerTracker} gameCounter={gameId}/>
		<Game key={gameId} winners={winnerTracker} setWinners={setWinnerTracker}  startNewGame={() => setGameId(gameId + 1)}/>
	</>
);}

export default TicTacToe;