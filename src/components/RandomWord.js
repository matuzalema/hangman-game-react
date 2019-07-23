import React from 'react';
import './RandomWord.scss';

class RandomWord extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            wordSplit: this.props.words[0].split("")
        }
    }


     render(){
         return (
             <div className="choiceLetters">
                 <ul className="letterList">
                     {this.state.wordSplit.map(letter => {
                         return <li className={this.props.addClassMatchLetter ? "matchLetter": "noMatchLetter"}>{letter}</li>
                     })}
                 </ul>
             </div>
         )
     }
}

export default RandomWord;