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

    handleNameChange = (event) => {
        this.setState(
            {
                name: event.target.value
            });
    }

    handleCategoryChange = (event) => {
        this.setState(
            {
                category: event.target.value
            }
        )
    }

    handleCommentsChange = (event) => {
        this.setState(
            {
                comments: event.target.value
            }
        );
    }

    render() {
        return (
            <div>
                <form>
                    <h2>Please fill out the form below</h2>
                    <div>
                        <label htmlFor='name' >Your Name:</label>
                        <input value={this.state.name} onChange={this.handleNameChange} type="text" id='name' name='name' />
                    </div>

                    <div>
                        <label htmlFor='category'>Inquiry category:</label>
                        <select id='category' name='category' value={this.state.category} onChange={this.handleCategoryChange}>
                            <option value="" disabled>Select an option...</option>
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='comments'>Comments</label>
                        <textarea id='comments' name='comments' value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm