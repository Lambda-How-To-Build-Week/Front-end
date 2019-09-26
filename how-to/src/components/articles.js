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
        width: 100vw;
        margin-top: 0;
        padding: 1rem 5rem;
        background-color:#e76e3c;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .articles-header{
        margin: 3rem;
    }

    .articles-list-wrapper {
        // margin-top: 75px;
        // display: flex;
        // justify-content: center;
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .article-card {
        width: 250px;
        height: 350px;
        margin: 2rem;
        padding: 1rem;

        @media only screen and (max-width: 600px){
            margin-bottom: 0;
        }
    }
    
    .article-card p {
        text-align: center;
        color: #595959;
    }
    
    .article-list-image {
        width: 100%;
        border: 1px solid lightgray;
    }

    a{
        & h3{
            color: #e76e3c;
        }
    }
    
    
    .articles-button {
       padding: 1rem;
       postion: relative;
       display: flex;
       justify-content:flex-end;

    }
  
    .articles-button .md-button {
        color: #fff;
        background-color: #e76e3c;
        padding: 1rem 2rem;

        &:hover{
            border: 1px solid #e76e3c;
            background-color: white;
            color: #e76e3c; 
        }
        
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
            {/* <Route path='/new-tutorial' component={NewTutorialForm}/> */}
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