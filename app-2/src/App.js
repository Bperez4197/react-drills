import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      arr: ["spaghetti","ice cream","sushi","bologna","cheese"],
     
    }
  }

  

 



  render() {
    let list = this.state.arr.map((elem) => <h1>{elem}</h1>);


    return (
      <div className="App">
        {list}
      </div>
    );
  }
}

export default App;
