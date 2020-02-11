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

  switchNameHandler = (newName) => {

    const newPersons = [
      { name: newName, age: 20 },
      { name: 'Ezio Auditore', age: 26 },
      { name: 'Altaïr Ibn-La\'Ahad', age: 32 }
    ];
    this.setState({
      persons: newPersons
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Atharv', age: 20 },
        { name: event.target.value, age: 26 },
        { name: 'Altaïr', age: 32 }
      ]
    });
  };

  // There must be exactly one root element in 'return'
  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <button onClick={() => this.switchNameHandler('Atharv Kurdukar')}>Full Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.switchNameHandler.bind(this, 'Shardul Kurdukar')} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          change={this.nameChangedHandler}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}> Occupation: Assassin </Person>
      </div>
    );
    // Alternate way: Gets compiled as shown below
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello, World!'));
  }
}

export default App;
