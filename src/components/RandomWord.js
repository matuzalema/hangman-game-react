import React from 'react';
import './RandomWord.scss';

class RandomWord extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            wordSplit: this.props.words[0].split("")
        }
    }

    renderLetters(){
            
            //     for(let i=0; i<12; i++){
            //         if (12 > this.state.wordSplit.length) {
            //             return <li className="emptyItem">dd</li>
            //         } else {
            //             this.state.wordSplit.map(letter => {
            //                 return <li className="letterItem">{letter}</li>
            //             })
            //         }
            // }
               
    }
     render(){
         return (
             <div className="choiceLetters">
                 <ul className="letterList">
                     {this.renderLetters()}
                     {this.state.wordSplit.map(letter => {
                         return <li className="letterItem">{letter}</li>
                     })}
                 </ul>
             </div>
         )
     }
}

// const mapStateToProps = state => {

// }
export default RandomWord;