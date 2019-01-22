import React, { Component } from 'react'

export class NewTask extends Component {

        constructor(){
            super();

            this.state={
                userInput: ''
            }
            this.handleAdd = this.handleAdd.bind(this);
        }

    handleUserInput(val){
        this.setState({
            userInput: val
        })
    }

    handleAdd(){
        this.props.add( this.state.userInput );
        this.setState({
            userInput: ''
        })
    }


    render() {
        return (
            <div>
                <input onChange={(e) => this.handleUserInput(e.target.value)} value={this.state.userInput} placeholder="New Task?"></input>

                <button onClick={this.handleAdd}>Add</button>
                
            </div>
        )
    }
}

export default NewTask
