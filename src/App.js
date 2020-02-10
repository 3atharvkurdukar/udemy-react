import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const App = () => {
  // This is the approach for functions
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Atharv', age: 20 },
      { name: 'Ezio', age: 26 },
      { name: 'Altaïr', age: 32 }
    ]
  });

  const switchNameHandler = () => {

    const newPersons = [
      { name: 'Atharv Kurdukar', age: 20 },
      { name: 'Ezio Auditore', age: 26 },
      { name: 'Altaïr Ibn-La\'Ahad', age: 32 }
    ];
    // WARNING: 
    // The state variable in class modifies the current state.
    // This replaces the current state with the new state object instead.
    setPersonsState({
      persons: newPersons
    });
  };

  // There must be exactly one root element in 'return'
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <button onClick={switchNameHandler}>Full Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>Occupation: Assassin</Person>
    </div>
  );
}

export default App;
