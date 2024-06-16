import React, { Component } from 'react'

export class LifeCyclesCDUChild extends Component {
    constructor(props) {
        super(props)

        console.log("Child Constructor")

        this.state = {
            greeting: 'Hello'
        }
    }

    updateGreeting = () => {
        console.log("Child Update greeting")
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === "Hello" ? "Goodbye" : "Hello"
            }
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Child componentDidUpdate")
        if (prevProps.greeting != this.state.greeting){
            console.log("Parent greeting changed")
        }
    }

    render() {
        console.log("Child Render method called")
        return (
            <div>
                <h1>Child {this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update greeting</button>
            </div>
        )

    }
}

export default LifeCyclesCDUChild