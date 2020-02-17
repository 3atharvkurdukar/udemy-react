import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: 'nf9wy3r', name: 'Atharv', age: 20 },
        { id: 'iwuyt34', name: 'Ezio', age: 26 },
        { id: 'u3iy4r8', name: 'Altaïr', age: 32 }
      ],
      showPersons: false
    };
  }

  static getDerivedStateFromProps(props, state) {

    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

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

    console.log('[App.js] rendering...');

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
