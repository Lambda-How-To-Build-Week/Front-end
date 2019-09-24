import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import SignUp from "./components/sign-up";

import home from './components/home';
import data from './data';

function App() {
  const [items] = useState(data);
  return (
    <div className="App">
      <nav>
        <h1 className='app-header'></h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
        </div>
      </nav>
      <Route exact path='/' render={props => ( <home {...props} articles={items}/>)} />
     <SignUp/>
    </div>
  );
}

export default App;
