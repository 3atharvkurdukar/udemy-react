import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {


  render() {
    console.log('[Person.js] rendering...');
  
    // React.Fragment works exactly like Auxiliary and is built into React
    return (
      <React.Fragment>
        <p key="ncwi4t" onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old.</p>
        <p key="877t4f">{this.props.children}</p>
        <input key="hg94bn" onChange={this.props.change} value={this.props.name} />
      </React.Fragment>
    );
  }
}
export default Person;
