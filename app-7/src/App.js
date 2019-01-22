import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask';
import List from './List';
import Todo from './Todo'

class App extends Component {
      constructor(props){
        super(props);
        this.state = {
          list: []
        }
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(task){
        this.setState({
          list: [...this.state.list, task]
        })
      }



  render() {
    return (
      <div className="App">
      <h1>My To-do List:</h1>
      <NewTask add={this.handleClick} /> 
      <List tasks={this.state.list}/>
        
      </div>
    );
  }
}

export default App;
