import React, { useState } from 'react';

export default function SearchForm(props) {
    const {searchCallback} = props;
    const [dataSrc,setDataSrc] = useState('');

    const handleChange= e => {
        setDataSrc(e.target.value);
    };


    return (
        <div className='search-form'>
            <label htmlFor='data-search-form'>Search: </label>
            <input id='data-search-form' type='text' name='data.title' onChange={handleChange}/>
        </div>
    );
}