import React from 'react';

function ScoreBoard (props)
{
	return (
		<div>
			<h1>Score Board</h1>
			{utils.range(0,props.gameCounter-1).map(result =>(
				<GameResult key={result} 
				gameId={result} 
				winner={props.gamesPlayed[result]}/>
			))}
		</div>
	)
}

function GameResult (props){
	return <h3>Game {props.gameId+1}: {props.winner}</h3>
}

// Math science
const utils = {
	// Sum an array
	sum: arr => arr.reduce((acc, curr) => acc + curr, 0),
  
	// create an array of numbers between min and max (edges included)
	range: (min, max) => Array.from({length: max - min}, (_, i) => min + i),
};

export default ScoreBoard;