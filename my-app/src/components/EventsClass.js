import React, { Component } from "react";

export class EventsClass extends Component {
    handleClick() { 
        console.log("Button click class")
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me - class component</button>
            </div>
        );
    }
}

export default EventsClass;
