import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props)

        this.inputName = React.createRef();
        this.inputCategory = React.createRef();
        this.inputComments = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputCategory.current.value, this.inputName.current.value, this.inputComments.current.value);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Please fill out the form below</h2>
                    <div>
                        <label htmlFor='name' >Your Name:</label>
                        <input type="text" id='name' name='name' ref={this.inputName} />
                    </div>

                    <div>
                        <label htmlFor='category'>Inquiry category:</label>
                        <select id='category' name='category' ref={this.inputCategory} defaultValue=''>
                            <option value="" disabled>Select an option...</option>
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='comments'>Comments</label>
                        <textarea id='comments' name='comments' ref={this.inputComments}></textarea>
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UncontrolledForm