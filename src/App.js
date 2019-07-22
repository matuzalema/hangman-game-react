import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import ChoiceLetters from './components/ChoiceLetters';
import { connect } from 'react-redux';
import RandomWord from './components/RandomWord';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hit: null
    }
  }  
    render(){
      return (
        <div className="App">
          <div className="container">
            <div className="hangman-letters-wrapper">
              <h1>hangman</h1>
              <ChoiceLetters />
            </div>
            <RandomWord words={this.props.words}/>
          </div>
        </div>
      );
    }
  }


const mapStateToProps = state => ({
  words: state.words
})

export default connect(mapStateToProps)(App);
