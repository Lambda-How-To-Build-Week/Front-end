import React, {Component} from 'react';

export default function SearchBar(props) {
    const [searchQuery,setSearch] = useState('');
    const doSearch = (e) => {
        e.preventDefault()
        props.search(searchQuery)
    }
    return (
        <form onSubmit={e => doSearch(e)} className='search-form'>
            <label htmlFor='data-search-form'>Search: </label>
            <input id='data-search-form' type='text' name='data.title' onChange={(e) => setSearch(e.target.value)}/>
        </form>
    );
}
Collapse

















