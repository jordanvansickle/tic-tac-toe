import React from 'react';

const PlaySlot = (props) =>{
    const handleClick = () =>{ 
        props.onButtonClick(props.number, props.status)
    };
    return(
        <button 
            className="butt" 
            onClick={handleClick}
            >
            {props.status === 'used'? 'X' : props.status === 'hello' ? 'O' : ''}
        </button>
  );
}

export default PlaySlot;