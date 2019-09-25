import React, { Component } from 'react';
import Articles from './articles';
import data from '../data';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    updateSearch = (event) => {
        this.setState({search: event.target.value})
    }
    render() {
        let filteredSearch = this.props.data;
        return (
            <div>
                <ul>
                    {filteredSearch.map((post)=> {
                        return <p> post={post} key={post.id}</p> 
                    })}
                </ul>
                <input type='text' value={this.state.search} onChange={this.updateSearch}/>
            </div>
        )
    }
}

export default SearchBar;