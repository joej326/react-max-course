import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {name: 'James McGill', profession: 'Lawyer'},
      {name: 'Walter White', profession: 'Chemist'},
      {name: 'Jesse Pinkman', profession: 'Business man'},
    ]
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
    })
  }

  render() {
    return (
      <div className="App">
        <h1>TEST</h1>
        <button onClick={()=>this.switchNameHandler('default name')}>Switch Name</button>
        <Person name={this.state.people[0].name} profession={this.state.people[0].profession} />
        <Person 
        name={this.state.people[1].name} 
        profession={this.state.people[1].profession}
        click={this.switchNameHandler.bind(this, 'not a default name')} />
        <Person name={this.state.people[2].name} profession={this.state.people[2].profession} />
        <Person>I am inbetween</Person>
      </div>
    );
  }
}

export default App;
