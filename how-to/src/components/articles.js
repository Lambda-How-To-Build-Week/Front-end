
// import { Route, Link } from "react-router-dom";
import '../App.css';
import styled from 'styled-components';
// import SearchBar from './search-bar';
// import NewTutorialForm from './new-tutorial';
import React, { useState } from 'react';
import data from '../data';

const StyledArticle = styled.div`

    .articles-list-wrapper {
        margin-top: 75px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .article-card {
        width: 250px;
        margin: 0 10px 32px;
    }
    
    .article-card p {
        margin: 0 0 4px;
        text-align: left;
        color: #595959;
    }
    
    .article-list-image {
        width: 100%;
        border: 1px solid lightgray;
    }
    
    .articles-header{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
    }
    
    .articles-button {
        display:flex;
        flex-direction:row;
        justify-content:flex-end;
        align-content:flex-end;
        flex-wrap:wrap;
        margin-right:25px;
    }
  
    .articles-button .md-button {
        margin: 0 8px;
        margin-right:20px;
        border: none;
        border-radius: 2px;
        padding: 0 16px;
        min-width: 64px;
        height: 36px;
        vertical-align: middle;
        text-align: center;
        text-overflow: ellipsis;
        font-size:1.3rem;
        font-weight:bold;
        color: #fff;
        background-color: #e76e3c;
        
    }

    button:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
      }
`;



function Articles () {
//    const [articles] = useState(data)

//call filter before map

    return (
        <div className='articles-wrapper'>
            <div className='articles-header'>
                <h1>Suggested Articles</h1>
                {/* <SearchBar/> */}
            </div>

            {/* <Link to='/new-tutorial' className='articles-button'>
                <button onClick className="md-button new-tutorial-button">Make a New Tutorial</button>
            </Link> */}
            {/* <Route path='/new-tutorial' component={NewTutorialForm}/> */}
            <StyledArticle>
            <div className='articles-list-wrapper'></div>
            {data.map(post => (
               <div className='article-card' key={post.id}>
                   <h2>{post.title}</h2>
                   <img className='article-list-image'
                   src={post.imageUrl}
                   alt={post.alt}/>
                   <h3>{post.title}</h3>
                   <p>{post.summary}</p>
               </div>
           ))}
           
        </StyledArticle>
        </div>
    );
            
}

export default Articles;