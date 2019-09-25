import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import SearchForm from "./components/search-form";
import SignUp from "./components/sign-up";
import Articles from "./components/articles";
import LogInPage from "./components/logIn-page";
import data from "./data";
import NewTutorialForm from "./components/new-tutorial";
import LogIn from "./components/logIn-form";
import MyItems from "./components/finished-tutorial";

function App() {
  const [items] = useState(data);
  return (
    <div className="App">
      <div className="navigation">
        <nav>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/login"> Log In</Link>
            <SearchForm />
          </div>
        </nav>
      </div>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/finished-tutorial" component={MyItems} />
      <Route exact path="/new-tutorial" component={NewTutorialForm} />
      <Route
        exact
        path="/articles"
        render={props => <Articles {...props} articles={items} />}
      />
      <Route path="/login" component={LogIn} />
      {/* <SignUp/> Took this out -- made it the Home link */}
    </div>
  );
}

export default App;
