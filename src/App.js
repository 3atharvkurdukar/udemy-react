import React from 'react';
import './App.css';

import Person from './Person/Person';

function App() {
  // There must be exactly one root element in 'return'
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <Person />
    </div>
  );
  // Alternate way: Gets compiled as shown below
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello, World!'));
}

export default App;
