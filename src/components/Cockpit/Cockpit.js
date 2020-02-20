import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

    const togglePersonRef = useRef(null);

    useEffect(() => {
        // console.log('[Cockpit.js] useEffect');
        // // Http Request...
        // setTimeout(() => {
        //     alert('Data saved to the cloud!');
        // }, 1000);

        // return () => {
        //     console.log('[Cockpit.js] cleanup work in useEffect()');
        // };
        togglePersonRef.current.click();

    }, []);     // gets executed only once
    // }, [props.persons]);     // gets executed for every change in persons

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');

        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect()');
        };
    });     // gets executed evvery time DOM is rendered

    console.log('[Cockpit.js] rendering...');
 
    const assignedClasses = [];
    let btnClass='';

    if (props.showPersons) {
        btnClass = classes.Red;
    }    
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.blue);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <br />
            <h1 className={assignedClasses.join(' ')}>{props.title}</h1>
            <p>It's working!!</p>
            <button
                className={btnClass}
                ref={togglePersonRef}
                onClick={props.clicked}>Show / Hide</button>
            <button onClick={props.login}>Login</button>
        </div>
    );
};

export default React.memo(Cockpit);     // Memorises the inputs so that it only updates when input changes