import React from "react";


const FunctionalGreetingWithProps = (props) => <h1>Hi {props.name}! I see you're {props.age} years old; {props.greeting}</h1>;

export default FunctionalGreetingWithProps;