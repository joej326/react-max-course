import React, { Component } from 'react';

import Person from './Person/Person';


// if you use parenthesis in the same line with an arrow function you can omit "return".
class Persons extends Component {

  componentWillReceiveProps() {
    
  }

  render () {
    return this.props.persons.map((person, i) => {
      return ( 
      <Person 
      name={person.name}
      profession={person.profession}
      key = {person.id}
      deletion={()=>this.props.clicked(i)}
      change={(event)=>this.props.changed(event.target.value, person.id)}
       />
      )
    });
  }
} 


// BEFORE WE MADE IT STATEFULL, THIS IS WHAT WE HAD:

// const persons = (props) => props.persons.map((person, i) => {
//   return ( 
//   <Person 
//   name={person.name}
//   profession={person.profession}
//   key = {person.id}
//   deletion={()=>props.clicked(i)}
//   change={(event)=>props.changed(event.target.value, person.id)}
//    />
//   )
// });


export default Persons;
