import React from 'react';
import './Person.css';

// 'props' includes the tag attributes and inner content as 'children' property
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input onChange={props.change} value={props.name} />
        </div>
    );
}
export default person;