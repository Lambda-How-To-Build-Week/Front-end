import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
// import "./styles.css";

function Home(props) {
    return (
        <div className='articles-wrapper'>
           props.data.map(article => (
               <div className='article-card' key={data.id}>
                   <Link to={`/${data.id}`}>
                   <img className='article-list-image'
                   src={data.imageUrl}
                   alt={data.name}/>
                   <p>{data.name}</p>
                   </Link>
                   <p>{data.description}</p>
               </div>
           ))}
        </div>
    );
}

export default Home;