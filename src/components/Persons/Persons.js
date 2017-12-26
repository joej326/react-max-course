import React from 'react';

import Person from './Person/Person';


// if you use parenthesis in the same line with an arrow function you can omit "return".
const persons = (props) => props.persons.map((person, i) => {
        return ( 
        <Person 
        name={person.name}
        profession={person.profession}
        key = {person.id}
        deletion={()=>props.clicked(i)}
        change={(event)=>props.changed(event.target.value, person.id)}
         />
        )
      });


export default persons;
