import * as React from 'react';
import PlayAgain from './PlayAgain';
import PlaySlot from './PlaySlot';

function Game (props) {
    const [player, setPlayer] = React.useState(1);
    const [player1Selection, setPlayer1Selection] = React.useState([]);
    const [player2Selection, setPlayer2Selection] = React.useState([]);
    const [availableNums, setAvailableNums] = React.useState([1,2,3,4,5,6,7,8,9]);
    
    const positionStatus = (location) =>{
        if(!availableNums.includes(location)){
            if(player2Selection.includes(location))
            {
                return 'hello';
            }
            return 'used'
        }
        return 'available';
    }

    const updateScoreBoard = () =>{
        props.winners.push(gameStatus());
        props.setWinners(props.winners);
    }

    const gameStatus = () =>{ 
        if(containsAll([1,2,3], player1Selection) || containsAll([4,5,6], player1Selection)
        || containsAll([7,8,9], player1Selection) || containsAll([1,4,7], player1Selection)
        || containsAll([2,5,8], player1Selection) || containsAll([3,6,9], player1Selection)
        || containsAll([1,5,9], player1Selection) || containsAll([3,5,7], player1Selection))
        {
            return 'player1'
        }
        if(containsAll([1,2,3], player2Selection) || containsAll([4,5,6], player2Selection)
        || containsAll([7,8,9], player2Selection) || containsAll([1,4,7], player2Selection)
        || containsAll([2,5,8], player2Selection) || containsAll([3,6,9], player2Selection)
        || containsAll([1,5,9], player2Selection) || containsAll([3,5,7], player2Selection))
        {
            return 'player2'
        }
        if(availableNums.length === 0)
        {
            return 'tie';
        }
        return 'active';
    }

    const onSlotChosen = (location, currentStatus) =>{
        if(currentStatus !== 'available' || gameStatus() !== 'active'){
            return;
        }

        if(player === 1)
        {
            player1Selection.push(location);
            setPlayer1Selection(player1Selection);
        }
        if(player === 2)
        {
            player2Selection.push(location);
            setPlayer2Selection(player2Selection);
        }

        
        //Update the available list
        const newCandidateNums = availableNums.filter(cn => cn !== location);       
        setAvailableNums(newCandidateNums);

        //Switch to the other player
        setPlayer(SwitchPlayers(player));
    };
    
    return ( 
        <div className = "game">
        <h1>Tic-Tac-Toe Game</h1>
        {gameStatus() !== 'active'
        ? ( 
            updateScoreBoard(),
            <PlayAgain update={updateScoreBoard} onClick={props.startNewGame} status={gameStatus()} />          
        ) 
        : (<h2 style={{textAlign: "center" }}>It is Player {player} turn.</h2>)}
        
        <div className="left">
        <div id="outer">
            <PlaySlot key = {1} number={1} status={positionStatus(1)} onButtonClick = {onSlotChosen} />
            <PlaySlot key = {2} number={2} status={positionStatus(2)} onButtonClick = {onSlotChosen} />
            <PlaySlot key = {3} number={3} status={positionStatus(3)} onButtonClick = {onSlotChosen} />
        </div>
        <div id="outer">
            <PlaySlot key = {4} number={4} status={positionStatus(4)} onButtonClick = {onSlotChosen} />
            <PlaySlot key = {5} number={5} status={positionStatus(5)} onButtonClick = {onSlotChosen} />
            <PlaySlot key = {6} number={6} status={positionStatus(6)} onButtonClick = {onSlotChosen} />
        </div>
        <div id="outer">
            <PlaySlot key = {7} number={7} status={positionStatus(7)} onButtonClick = {onSlotChosen} />
            <PlaySlot key = {8} number={8} status={positionStatus(8)} onButtonClick = {onSlotChosen} />
            <PlaySlot key = {9} number={9} status={positionStatus(9)} onButtonClick = {onSlotChosen} />
        </div>
        </div>
        </div>
     );}

function SwitchPlayers (currentPlayer){
    if(currentPlayer === 1)
    {
        return 2;
    }
    return 1;
}

function containsAll(arr1, arr2){ 
    return arr1.every(i => arr2.includes(i));
}

export default Game;