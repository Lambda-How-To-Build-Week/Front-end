import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import NewTutorialForm from './new-tutorial';
import posts from '../data';
import styled from 'styled-components';
import SearchForm from "./searchForm";


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
`


function Articles(props) {
  // const [items] = useState(posts);
  return (
    <StyledArticle className="articles-wrapper">
      <div className = "nav">
          <h2> How-to</h2>
          <SearchForm search = {props.search}/>
      </div>
      {/* <nav> 
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/articles">Articles</Link>
                    <Link to="/login"> Log In</Link>
                    <SearchForm/>
                </div>
            </nav>
            <Route exact path="/" component={SignUp} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/articles" render={props => <Articles {...props} articles={items} />}/> */}
      <div className="articles-header">
        <h1>Suggested Articles</h1>
      </div>
      <Link to="/new-tutorial" className="articles-button">
        <button className="md-button new-tutorial-button">
          Make a New Tutorial
        </button>
      </Link>
      <Route path="/new-tutorial" component={NewTutorialForm} />
      <div className="articles-list-wrapper">
        {props.articles.map(post => (
          <div className="article-card" key={post.id}>
            <Link to={`/articles/${post.id}`}>
              <img
                className="article-list-image"
                src={post.imageUrl}
                alt={post.alt}
              />
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
