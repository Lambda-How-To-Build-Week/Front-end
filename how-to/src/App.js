import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import SignUp from "./components/sign-up";
import Articles from "./components/articles";
import LogInPage from './components/logIn-page';
import data from "./data";

function App() {
  const [items] = useState(data);
  return (
    <div className="App">
      <nav> 
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/login"> Log In</Link>
        </div>
      </nav>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/login" component={LogInPage} />
      <Route
        exact
        path="/articles"
        render={props => <Articles {...props} articles={items} />}
      />
      <Route exact path="/login" component={LogInPage}/>
      {/* <SignUp/> Took this out -- made it the Home link */}
    </div>
  );
}

export default App;
