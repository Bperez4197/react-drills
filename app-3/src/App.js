import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state= {
      list: ["spahgetti","ice cream","sushi","bologna","cheese"] ,
      userInput: '' ,
      
    }
  }

  changeUserInput(val){
    this.setState({
      userInput: val
    })
  }



  render() {
    
    let filteredList = this.state.list.filter((elem) => {
      return elem.includes(this.state.userInput);
    }).map((elem) => {
      return <h1>{elem}</h1> 
    })

    return (
      <div className="App">
      <input onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.userInput}>
      </input>
      {filteredList}
     
  
       
      </div>
    );
  }
}

export default App;
