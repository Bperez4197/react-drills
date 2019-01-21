import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props){
      super(props)
      this.state = {
        userInput: ''
      }
    }

    changeUserInput(val){
      this.setState({
        userInput: val
      })
    }



  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.userInput}></input>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

export default App;
