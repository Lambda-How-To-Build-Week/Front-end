import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import posts from '../data';


function Articles(props) {

    const routeToTutorial = event => {
        event.preventDefault();
        props.history.push('/');
    }
   

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
                   alt={post.title}/>
                   <p>{post.title}</p>
                   </Link>
                   <p>{post.summary}</p>
               </div>
           ))}
            </div>
        </div>
    );
}

export default Articles;