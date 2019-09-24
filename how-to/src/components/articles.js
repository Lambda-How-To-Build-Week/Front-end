import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Articles = props => {

    return (
        <div className='articles-list-wrapper'>
           {props.articles.map(posts => (
               <div className='article-card' key={posts.id}>
                   <Link to={`/articles/${posts.id}`}>
                   <img className='article-list-image'
                   src={posts.imageUrl}
                   alt={posts.title}/>
                   <p>{posts.title}</p>
                   </Link>
                   <p>{posts.summary}</p>
               </div>
           ))}
        </div>
    );
}

export default Articles;