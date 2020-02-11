import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Atharv', age: 20 },
      { name: 'Ezio', age: 26 },
      { name: 'Altaïr', age: 32 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Atharv', age: 20 },
        { name: event.target.value, age: 26 },
        { name: 'Altaïr', age: 32 }
      ]
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };


  render() {

    const buttonStyle= {
      color: 'blue',
      backgroundColor: 'white',
      border: '2px solid blue',
      borderRadius: '6px',
      boxShadow: 'none',
      padding: '10px 20px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <br />
        <button 
          style={buttonStyle}
          onClick={this.togglePersonsHandler}>Show / Hide</button>
        {this.state.showPersons ? 
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age} 
              change={this.nameChangedHandler} />
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}> Occupation: Assassin </Person>
          </div>
         : null }
      </div>
    );
  }
}

export default App;
