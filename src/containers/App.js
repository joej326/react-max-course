import React, { Component } from 'react';
import './App.css';


// note: when we use super() in a class the super refers to the parent (like in java)
// and in this case the parent is React's Component, so the super() is inheriting React's Component constructor
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    people: [
      {id: 1, name: 'James McGill', profession: 'Lawyer'},
      {id: 2, name: 'Walter White', profession: 'Chemist'},
      {id: 3, name: 'Jesse Pinkman', profession: 'Business man'},
    ],
    showPeople: false
  };
 
  // DON'T invoke the onClick switchNameHandler is the JSX b/c it will be called when the component renders
  // which is NOT what we want. 
  // only invoke when it's inside an arrow function
  switchNameHandler = (newName) => {
    console.log('was clicked');
    this.setState({
      people: [
        {name: newName, profession: 'Lawyer'},
        {name: 'Walter White', profession: 'Chemist'},
        {name: 'Jesse Pinkman', profession: 'Business man'},
      ]
    });
  }

  deletePersonHandler = (index) => {
    let copyPeopleArray = [
      ...this.state.people
    ];
    copyPeopleArray.splice(index, 1);
    this.setState({
      people: copyPeopleArray
    });
  }

  // max recommends using this syntax. The other syntax can lead to problems with the keyword "this".
  // This syntax ensures that "this" inside of this method always refers to the class.
  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({
      showPeople: !doesShow
    });
  }

  // .find is like map, but when it finds "true" on any element, it returns that element.
  // .findIndex is the same, but it returns that element's index instead of the element itself.
  // ALSO: const person uses a spread operator which ALSO WORKS FOR OBJECTS. 
  // it takes all the properties of the object (in this case our person) and here we're storing
  // those properties in a new object 'person'.
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex((person)=>{
      return person.id === id; 
    });

    const person = {
      ...this.state.people[personIndex]
    };
    console.log('VALUE', event);
    console.log('PERSON', person);
    console.log('INDEX', personIndex);
    
    person.name = event;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({ people });
  }

  render() {
    
    // NOTE: inside of the render method, we cannot use block statements. Only simple statements.
    // This means no traditional if statements. Ternary is A-OK.

    let people = null;

    // the parenthesis are just to make it look pretty :)

    // key and the bind argument for the array index are different b/c
    // the items in the list will change position whenever something is deleted,
    // so we need something dynamic (array indexes) as opposed to something static (item id's)
    if(this.state.showPeople){
      people = (
        <div>
          <Persons
          persons={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <div className="App container">
        <h1>TEST</h1>
        <button 
        onClick={this.togglePeopleHandler}
        >Show Names</button>
        {people}
      </div>
    );
  }
}

export default App;