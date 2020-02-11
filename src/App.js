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

  deletePersonHandler = (personIndex) => {
    // const newPersons = this.state.persons.slice();
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({
      persons: newPersons
    });
  }

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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} />
              );
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <br />
        <button 
          style={buttonStyle}
          onClick={this.togglePersonsHandler}>Show / Hide</button>
        {persons}
      </div>
    );
  }
}

export default App;
