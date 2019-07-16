import React from 'react';
import './ChoiceLetters.scss';

function ChoiceLetters(){
    return(
        <>
        <h1 className='header'>Wybrane litery</h1>
            <input className='input-enter-letter' type="text" autofocus="true" ></input>
        </>
    )
}

export default ChoiceLetters;