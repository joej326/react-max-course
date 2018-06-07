import React, { Component } from 'react';

import Person from './Person/Person';


// if you use parenthesis in the same line with an arrow function you can omit "return".
class Persons extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('Persons.js updated:', nextProps);
  }

  // note that this method is pretty important b/c it can save us performance
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons.js should update:', nextProps, nextState); 

    // this is checking if any of the props (coming from App.js) are changed.
    // Only then will the component continue with rendering b/c this is the 
    // shouldComponentUpdate lifecycle hook.
    return nextProps.persons !== this.props.persons || 
      nextProps.changed !== this.props.changed || 
      nextProps.clicked !== this.props.clicked;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Persons.js will update:', nextProps, nextState);     
  }

  componentDidUpdate() {
    console.log('Persons.js did update:');
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
