import React, { Component } from 'react';
import propTypes from 'prop-types';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../context/auth-context';

class Person extends Component {

  constructor(props) {
    super(props);

    this.inputElRef = React.createRef();
  }

  static contextType = AuthContext;

  render() {
    console.log('[Person.js] rendering...');
  
    // React.Fragment works exactly like Auxiliary and is built into React
    return (
      <React.Fragment>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log In</p>}
        <p key="ncwi4t" onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old.</p>
        <p key="877t4f">{this.props.children}</p>
        <input 
          key="hg94bn"
          // ref={ (inputEl) => {this.inputElRef = inputEl} } 
          ref={this.inputElRef}
          onChange={this.props.change} 
          value={this.props.name} />
      </React.Fragment>
    );
  }

  componentDidMount() {
    // this.inputElRef.focus();
    this.inputElRef.current.focus();
    console.log(this.context.authenticated);
  }
}

Person.propTypes = {
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  change: propTypes.func
};

export default withClass(Person, classes.Person);
