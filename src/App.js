import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  // state only works for classes, not for functions
  state = {
    persons: [
      { name: 'Atharv', age: 20 },
      { name: 'Ezio', age: 26 },
      { name: 'Altaïr', age: 32 }
    ]
  };

  switchNameHandler = () => {

    const newPersons = [
      { name: 'Atharv Kurdukar', age: 20 },
      { name: 'Ezio Auditore', age: 26 },
      { name: 'Altaïr Ibn-La\'Ahad', age: 32 }
    ];
    this.setState({
      persons: newPersons
    });
  };

  // There must be exactly one root element in 'return'
  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <button onClick={this.switchNameHandler}>Full Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Occupation: Assassin</Person>
      </div>
    );
    // Alternate way: Gets compiled as shown below
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello, World!'));
  }
}

export default App;
