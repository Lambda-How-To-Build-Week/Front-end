import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import SignUp from "./components/sign-up";
import Articles from "./components/articles";
import data from "./data";
import LogInPage from "./components/logIn-page"

function App() {
  const [items] = useState(data);
  return (
    <div className="App">
      <nav>
        <h1 className="app-header"></h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
        </div>
      </nav>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/login" component={LogInPage} />
      <Route
        exact
        path="/articles"
        render={props => <Articles {...props} articles={items} />}
      />
      {/* <SignUp/> Took this out -- made it the Home link */}
    </div>
  );
}

export default App;
