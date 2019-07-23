import React from 'react';
import './ChoiceLetters.scss';
import {connect} from 'react-redux';
import { getLetter } from '../actions/lettersActions';
import RandomWord from "./RandomWord";


class ChoiceLetters extends  React.Component {
    constructor(props) {
        super(props);
            this.state = {
                choiceLetters: [],
                communique: "",
                addClassMatchLetter: false
            }
        }


    compareLetters(letters){
        const lettersArray = letters.split("");
        let lastLetter = lettersArray[lettersArray.length - 1];

        if(this.props.words[0].indexOf(lastLetter) > -1){

            this.setState({
                communique: "it's a match", 
                addClassMatchLetter: true 
            });
        } else {
            this.setState({ 
                communique: "you missed", 
                addClassMatchLetter: false });
        }
 }

 handleChange(e){
     this.setState({ choiceLetters: e.target.value});
     let inputValue = e.target.value;
     this.compareLetters(inputValue);
 }


    render(){
        return(
            <div className="choiceLetters">
                <h1 className='header'>{this.state.communique}</h1>
                <input 
                    className='input-enter-letter' 
                    type="text" 
                    autoFocus="true" 
                    maxLength="10"
                    value={this.state.choiceLetters}
                    onChange={ e => this.handleChange(e)} >
                </input>  
                <RandomWord words={this.props.words} addClassMatchLetter={this.state.addClassMatchLetter}/>
            </div>
        );
    }
 
}

const mapStatetoProps = state => ({
    words: state.words
});

const mapDispatchToProps =  {
    getLetter
};

export default connect(mapStatetoProps, mapDispatchToProps)(ChoiceLetters);