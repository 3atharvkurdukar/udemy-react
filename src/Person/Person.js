import React from 'react';
import styled from 'styled-components';
// import './Person.css';

const StyledDiv = styled.div`
  width: 30%;
  margin: 8px auto;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 4px  #bcbcbc;
  padding: 16px;
  text-align: center;

  '@media (min-width: 500px)': {
    width: '450px'
  }
`;


// 'props' includes the tag attributes and inner content as 'children' property
const person = (props) => {

  return (
    <StyledDiv>
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old.</p>
      <p>{props.children}</p>
      <input onChange={props.change} value={props.name} />
    </StyledDiv>
  );
}
export default person;
