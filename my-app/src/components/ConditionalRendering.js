import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            isLoggedIn: true
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.isLoaded ? "Data loaded" : "Loading"}</h1>
                {this.state.isLoggedIn ? (
                    <div>
                        <p>Welcome to the site ! Please complete the following steps:</p>
                        <ol>
                            <li>Confirm email</li>
                            <li>Complete profile</li>
                            <li>Subscribe to newsletter</li>
                        </ol>
                    </div>
                ) : (
                    <p>Please sign in.</p>
                )}
            </div>
        )
    }
}

export default ConditionalRendering