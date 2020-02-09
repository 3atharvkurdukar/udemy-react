import React from 'react';

// 'props' includes the tag attributes and inner content as 'children' attribute
const person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    );
}
export default person;