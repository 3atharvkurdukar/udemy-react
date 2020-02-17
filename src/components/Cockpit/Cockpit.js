import React from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

    const assignedClasses = [];
    let btnClass='';

    if (props.showPersons) {
        btnClass = classes.Red;
    }    
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.blue);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <br />
            <h1 className={assignedClasses.join(' ')}>{props.title}</h1>
            <p>It's working!!</p>
            <button
                className={btnClass}
                changeColor={props.showPersons}
                onClick={props.clicked}>Show / Hide</button>
        </div>
    );
};

export default Cockpit;