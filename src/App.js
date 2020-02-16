import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

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

    let btnClass = '';
    let persons = null;
    if (this.state.showPersons) {
      btnClass = classes.Red;
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

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push('blue');
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push('bold');
    }

    return (
      <div className={classes.App}>
        <br />
        <p className={assignedClasses.join(' ')}>React App</p>
        <button 
          className={btnClass}
          changeColor={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Show / Hide</button>
        {persons}
      </div>
    );
  }
}

export default App;
