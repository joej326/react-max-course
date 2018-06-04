import React, { Component } from "react";

/*{children is reserved. It refers to elements inbetween the opening and closing}*/
//  brackets of the Component.

// we use this.props when we have a class. Before, we had a stateless compoenent
// that was just a function. we just used "props"

class Person extends Component {
    componentWillUnmount() {
        console.log('I\'m about to be removed!');
    }
  render() {
    return (
      <div>
        <h1 onClick={this.props.deletion}>
          Hello I am {this.props.name} and I am a {this.props.profession}!
        </h1>
        <p>{this.props.children}</p>
        <input className="form-control" onChange={this.props.change} />
      </div>
    );
  }
}


// BEFORE WE MADE IT STATEFULL, THIS IS WHAT WE HAD:

// const person = (props) => { // doesnt have to be "props" could be "redbulls"
// return (
//     <div>
//         <h1 onClick={props.deletion} >Hello I am {props.name} and I am a {props.profession}!</h1>
//         <p>{props.children}</p>
//         <input className="form-control" onChange={props.change} />    
//     </div>
// )
// }

export default Person;
