import React from 'react';
import './ChoiceLetters.scss';
import {connect} from 'react-redux';

class ChoiceLetters extends  React.Component {
    constructor(props) {
        super(props);
            this.state = {
                choiceLetters: [],
            }
        }

 handleInput(e){
    this.setState({choiceLetters: e.target.value});
 }
    render(){
        return(
            <div className="choiceLetters">
                <h1 className='header'>You missed:</h1>
                <input className='input-enter-letter' type="text" autoFocus="true" maxLength="10" onKeyPress={
                    (e)=> { this.handleInput(e)}         
                }
                ></input>
            </div>
        );
    }
}

const mapStatetoProps = state => ({
    words: state.words
});

export default connect(mapStatetoProps)(ChoiceLetters);