import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import ChoiceLetters from './components/ChoiceLetters';
import { connect } from 'react-redux';


class App extends React.Component {
  constructor(props){
    super(props);

  }  
    render(){

      return (
        <div className="App">
          <h1>{this.props.words[0]}</h1>
          <ChoiceLetters />
        </div>
      );
    }
  }


const mapStateToProps = state => ({
  words: state.words
})

export default connect(mapStateToProps)(App);
