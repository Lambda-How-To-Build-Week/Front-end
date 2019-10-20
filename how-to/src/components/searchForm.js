import React, { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    form{
        1px solid blue;

    }

    .search-label{
      font-family: 'Righteous', cursive;
    }

    #data-search-form {
      margin-left:15px;
    }
    
`;

export default function SearchForm(props) {
  const [searchQuery, setSearch] = useState("");

  const doSearch = e => {
    e.preventDefault();
    props.search(searchQuery);
    console.log(props.search(searchQuery));
  };
  return (
    <StyledDiv>
      <form onSubmit={e => doSearch(e)} className="search-form">
        <label htmlFor="data-search-form" className='search-label'>Search: </label>
        <input
          id="data-search-form"
          type="text"
          name="data.title"
          onChange={e => setSearch(e.target.value)}
        />
      </form>
    </StyledDiv>
  );
}
