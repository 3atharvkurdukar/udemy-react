import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { connect } from "react-redux";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson} />
        {this.props.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { persons: state.persons };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPerson: () => dispatch({ type: "ADD_PERSON" }),
    onDeletePerson: (personId) => dispatch({ type: "DELETE_PERSON", personId }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
