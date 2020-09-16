import React from 'react';

const PlayAgain = (props) =>{
    return(
    <div>
        {
        props.status === 'tie' 
        ? <h2 style={{textAlign: "center" }}>Game Over, Tied!</h2>
        : <h2 style={{textAlign: "center" }}>Winner is {props.status}!</h2>
        }
        <button style={{textAlign: "center" }} onClick={props.onClick}>Play Again?</button>
    </div>);
}

export default PlayAgain;