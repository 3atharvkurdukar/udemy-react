import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
      color: ${props => props.changeColor ? 'red' : 'green'};
      background-color: white;
      border: ${props => props.changeColor ? '2px solid red' : '2px solid green'};
      border-radius: 6px;
      box-shadow: none;
      padding: 10px 20px;
      cursor: pointer;
      &:hover {
        background-color: ${props => props.changeColor ? 'red' : '#0da000'};
        color: ${props => props.changeColor ? 'white' : 'black'};
      }
`;

class App extends Component {

  state = {
    persons: [
      { id: 'nf9wy3r', name: 'Atharv', age: 20 },
      { id: 'iwuyt34', name: 'Ezio', age: 26 },
      { id: 'u3iy4r8', name: 'Altaïr', age: 32 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => (p.id === id));
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
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


    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
              <Person
                click={() => this.deletePersonHandler(index)}
                change={(event) => this.nameChangedHandler(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id} />
              );
            })
          }
        </div>
      );
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('blue');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <br />
        <p className={classes.join(' ')}>React App</p>
        <StyledButton 
          changeColor={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Show / Hide</StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
