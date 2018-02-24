import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        <Person name="Jay">[1,2,3,4]</Person>
      </div>
    );
  }
}

export default App;
