import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            category: '',
            comments: ''
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState(
            {
                [name]: value
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Please fill out the form below</h2>
                    <div>
                        <label htmlFor='name' >Your Name:</label>
                        <input value={this.state.name} onChange={this.handleInputChange} type="text" id='name' name='name' />
                    </div>

                    <div>
                        <label htmlFor='category'>Inquiry category:</label>
                        <select id='category' name='category' value={this.state.category} onChange={this.handleInputChange}>
                            <option value="" disabled>Select an option...</option>
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='comments'>Comments</label>
                        <textarea id='comments' name='comments' value={this.state.comments} onChange={this.handleInputChange}></textarea>
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm