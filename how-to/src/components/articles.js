import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
// import SearchForm from './seach-form';
import posts from '../data';


function Articles() {

    return (
        <div className='articles-wrapper'>
            <div className='articles-header'>
                <h1>Suggested Articles</h1>
            </div>
            <div className='articles-button'>
                <button onClick className="md-button new-tutorial-button">Make a New Tutorial</button>
            </div>
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
        </div>
    );
}

export default Articles;