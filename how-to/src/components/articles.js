import React from "react";
import { Route, Link } from "react-router-dom";
import "../App.css";
import NewTutorialForm from "./new-tutorial";
import posts from "../data";
import styled from "styled-components";
import SearchForm from "./searchForm";
import LogIn from "./logIn-page";

const StyledArticle = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  h1,
  h2 {
    color: white;
  }

  .nav {
    box-sizing: border-box;
    width: 100vw;
    margin-top: 0;
    padding: 1rem 5rem;
    background-color: #e76e3c;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search-form {
    display: flex;
    flex-direction: row;
    font-size: 1.8rem;
    text-align: center;
  }

  .nav a {
    padding: 25px;
    color: white;
    // display: flex;
    // flex-direction: row;
    // justify-content: flex-end;
  }

  .articles-header {
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

    @media only screen and (max-width: 600px) {
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

  .articles-button {
    padding: 1rem 2rem;
    postion: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .articles-button .md-button {
    color: #fff;
    background-color: #e76e3c;
    padding: 1rem 2rem;

    &:hover {
      border: 1px solid #e76e3c;
      background-color: white;
      color: #e76e3c;
    }
  }
`;

function Articles(props) {
  return (
    <StyledArticle className="articles-wrapper">
      <div className="nav">
        <h1> How-to</h1>
        {/* <div> */}
        <nav>
          <div className="nav-links">
            <a href="https://distracted-brown-8fd3b2.netlify.com/">Home</a>
            <Link to="/articles">Articles</Link>
            <Route path="/login" component={LogIn} />
          </div>
        </nav>
        {/* </div> */};
      </div>
      <div className="articles-header">
        <h1>Suggested Articles</h1>
      </div>
      <div className="articles-button">
        <SearchForm search={props.search} />
        <Link to="/new-tutorial">
          <button className="md-button new-tutorial-button">
            Make a New Tutorial
          </button>
        </Link>
      </div>
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
