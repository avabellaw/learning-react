import React from 'react';

class StatefullGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            counter: 0,
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Enter" ? "Exit" : "Enter"
            }
        })
    }

    increment(){
        this.setState((prevState, prevProps) => {
            return {
                counter: prevState.counter+1
            }
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <p>Clicked {this.state.counter} times</p>
            </div>
        );
    }
}

export default StatefullGreeting;