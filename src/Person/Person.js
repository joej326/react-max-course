import React from 'react';

/*{children is reserved. It refers to elements inbetween the opening and closing}*/
                        //  brackets of the Component.

const person = (props) => { // doesnt have to be "props" could be "redbulls"
    return (
        <div>
            <h1 onClick={props.deletion} >Hello I am {props.name} and I am a {props.profession}!</h1>
            <p>{props.children}</p>
            <input onChange={props.change} />    
        </div>
    )
}

export default person;

