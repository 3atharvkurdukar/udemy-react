import React from 'react';
import './App.css';

import Person from './Person/Person';

function App() {
  // There must be exactly one root element in 'return'
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <Person name="Atharv" age="20" />
      <Person name="Ezio" age="26" />
      <Person name="Altair" age="32">Occupation: Assassin</Person>
    </div>
  );
  // Alternate way: Gets compiled as shown below
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello, World!'));
}

export default App;
