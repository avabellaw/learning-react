import React, { Component } from 'react'
import importedNames from "../../names"

export class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            names: importedNames,
            filteredNames: []
        }

    }

    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        this.setState({
            filteredNames: this.state.names.filter((name) => name.toLowerCase().includes(inputText))
        });
    }

    render() {
        return (
            <div>
                <h1>Name Search</h1>
                <p>Matching names found: {this.state.names.length}</p>
                <form>
                    <label htmlFor="name">Search box:</label>
                    <input type="text" onChange={this.handleChange} id="name" name="name" placeholder='Search names...' />
                </form>
                <div style={{ margin: 'auto' }}>{
                    this.state.names ? (
                        this.state.filteredNames.map((name) => {
                            return <p key={name}>{name}</p>
                        })
                    ) : <span>We will render names here.</span>
                }</div>
            </div>
        )
    }
}

export default SearchBar