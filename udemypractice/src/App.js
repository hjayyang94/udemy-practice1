import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
        {name: "Max", age: 29},
        {name: "Jay", age: 20},
        {name: "Katrina", age: 24}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 2},
        {name: 'Max', age: 2},
        {name: 'Max', age: 2}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Max", age: 2},
        {name: event.target.value, age: 2},
        {name: 'Max', age: 2}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        <button onClick={() => this.switchNameHandler("Maximillian!")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}>
          I am {this.state.persons[0].age} years old
        </Person>
        <Person 
          name={this.state.persons[1].name}
          click = {this.switchNameHandler.bind(this,"Max!")}
          changed = {this.nameChangedHandler}>
          I am {this.state.persons[1].age} years old
          
        </Person>
        <Person 
          name={this.state.persons[2].name}>
          I am {this.state.persons[2].age} years old
        </Person>
      
      </div>
    );
  }
}

export default App;
