import React, { Component } from 'react'
import MethodAsPropsChild from './MethodAsPropsChild';

export class MethodAsPropsParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    clickHandler = () => {
        this.setState((prevState) => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        });
    }

    render() {
        return (
            <div>
                <MethodAsPropsChild isLoggedIn={this.state.isLoggedIn} clickHandler={this.clickHandler} />
            </div>
        )
    }
}

export default MethodAsPropsParent