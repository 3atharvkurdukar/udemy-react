import React from 'react';
import Radium from 'radium';
import './Person.css';

// 'props' includes the tag attributes and inner content as 'children' property
const person = (props) => {

    const personStyle = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={personStyle}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input onChange={props.change} value={props.name} />
        </div>
    );
}
export default Radium(person);