import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import NewTutorialForm from './new-tutorial';
import posts from '../data';
import styled from 'styled-components';
import Find from "./searchForm";


const StyledArticle = styled.div`

    margin: 0;
    padding:0;
    box-sizing: border-box;

    h2{
        color: white;
    }

    .nav{
        box-sizing: border-box;
        border: 1px solid red;
        width: 100vw;
        margin-top: 0;
        padding: 1rem 5rem;
        background-color:#e76e3c;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .articles-list-wrapper {
        // margin-top: 75px;
        // display: flex;
        // flex-wrap: wrap;
        // justify-content: center;
        border: 1px solid red;
        width: 80%;
        margin: 0 auto;
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
        // display:flex;
        // flex-direction:row;
        // justify-content:center;
        // align-items:center;
    }
    
    .articles-button {
        // display:flex;
        // flex-direction:row;
        // justify-content:flex-end;
        // align-content:flex-end;
        // flex-wrap:wrap;
        // margin-right:25px;
    }
  
    .articles-button .md-button {
        // margin: 0 8px;
        // margin-right:20px;
        // border: none;
        // border-radius: 2px;
        // padding: 0 16px;
        // min-width: 64px;
        // height: 36px;
        // vertical-align: middle;
        // text-align: center;
        // text-overflow: ellipsis;
        // font-size:1.3rem;
        // font-weight:bold;
        // color: #fff;
        // background-color: #e76e3c;
        
    }

    button:hover {
        // box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
      }
`;


function Articles() {

    return (
        
        <StyledArticle className='articles-wrapper'>
            <div className = "nav">
                <h2> How-to</h2>
                <Find/>
            </div>
            <div className='articles-header'>
                <h1>Suggested Articles</h1>
            </div>
            <Link to='/new-tutorial' className='articles-button'>
                <button onClick className="md-button new-tutorial-button">Make a New Tutorial</button>
            </Link>
            <Route path='/new-tutorial' component={NewTutorialForm}/>
        <div className='articles-list-wrapper'>
           {posts.map(post => (
               <div className='article-card' key={post.id}>
                   <Link to={`/articles/${post.id}`}>
                   <img className='article-list-image'
                   src={post.imageUrl}
                   alt={post.alt}/>
                   <h3>{post.title}</h3>
                   </Link>
                   <p>{post.summary}</p>
               </div>
           ))}
            </div>
            
        </StyledArticle>
        
    );
}

export default Articles;