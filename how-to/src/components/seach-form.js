import React, { useState, useEffect } from "react";

export default function SearchForm (props) {

  const {searchCallback} = props;
 
  const [dataSearch, setdataSearch] = useState('');
  
  const handleChange = e =>{
    setdataSearch(e.target.value);
  };

  useEffect(() => {
    searchCallback(dataSearch);
  }, [dataSearch, searchCallback]);

  return (
    <section className="search-form">
      <label htmlFor="data-search-form">Data Search: </label> <input id="data-search-form" type="text" name="data_title" placeholder="tags" onChange={handleChange}/>
    </section>
  );
}