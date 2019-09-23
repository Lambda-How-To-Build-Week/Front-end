import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import SignUp from "./sign-up";
import "./styles.css";

function Home(props) {
    return (
        <div className='articles-wrapper'>
           props.data.map(articles => (
               <div className='articles-card'>
                   <Link to="/sign-up">Sign In
                   <img className='articles-image'
                   src={articles-imageUrl}
                   alt={articles.name}/>
                   <p>{articles.name}</p>
                   </Link>
                   <p>{articles.description}</p>
               </div>
           ))}
        </div>
    );
}


export default Home;