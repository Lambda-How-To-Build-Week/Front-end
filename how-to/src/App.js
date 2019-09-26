import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import SignUp from "./components/sign-up";
import Articles from "./components/articles";
import LogInPage from "./components/logIn-page";
import data from "./data";
import NewTutorialForm from "./components/new-tutorial";
import MyItems from "./components/finished-tutorial";

function App() {

  const [items, setItems] = useState(data);
  const [filteredItems, setFiltered] = useState(data);
  const search = (query) => {
    console.log(query)
    const found = items.filter(item => item.title.toLowerCase().includes(query))
    setFiltered(found)
  }

  

  const [post] = useState(data);


  return (
    <div className="App">
      <nav> 
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/login"> Log In</Link>
          <Link to = "/new-tutorial">tutorial</Link>
        </div>
      </nav>
      <Route path = "/login" component = {LogInPage}/>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/finished-tutorial" component={MyItems} />
      <Route
        exact
        path="/articles"
        render={props => <Articles {...props} articles={filteredItems} search= {search} />}
      />
      <Route path='/new-tutorial' component={NewTutorialForm}/>
    </div>
  );
}

export default App;
