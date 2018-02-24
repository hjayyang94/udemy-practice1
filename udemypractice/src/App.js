import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 29 },
      { name: "Jay", age: 20 },
      { name: "Katrina", age: 24 }
    ],
    showPersons: false
  }

  togglePersonHandler = () => {
    const changing = this.state.showPersons;
    this.setState({ showPersons: !changing });
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 2 },
        { name: 'Max', age: 2 },
        { name: 'Max', age: 2 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 2 },
        { name: event.target.value, age: 2 },
        { name: 'Max', age: 2 }
      ]
    })
  }
  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return (
              <Person name={person.name}>
                I am {person.age} years old
              </Person>
            )
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        <button onClick={() => this.togglePersonHandler()}>Switch Name</button>
        {persons}

      </div>
    );
  }
}

export default App;
