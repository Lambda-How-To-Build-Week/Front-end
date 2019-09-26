import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
// import SearchForm from "./components/search-form";
import SignUp from "./components/sign-up";
import Articles from "./components/articles";
import LogInPage from "./components/logIn-page";
import data from "./data";
import NewTutorialForm from "./components/new-tutorial";
import MyItems from "./components/finished-tutorial";
import Find from "./components/searchForm";

function App() {

  const [tutorial, setTutorial] = useState([]);

  const search = (formValue, actions) => {
    const rightTutorial = tutorial.filter( tut => {
      if(tut.name.toLowerCase().includes(formValue.name)){
        return tut
      }
    })
    setTutorial(rightTutorial);
    actions.resetForm();
  }


  const validationSchema = {a:'build'};

  const [items] = useState(data);


  return (
    <div className="App">
      <nav> 
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/login"> Log In</Link>
          <Link to = "/new-tutorial">tutorial</Link>
          
          {/* <SearchForm/> */}
        </div>
      </nav>
      <Route path = "/login" component = {LogInPage}/>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/finished-tutorial" component={MyItems} />
      <Route
        exact
        path="/articles"
        render={props => <Articles {...props} articles={items} />}
      />
      <Route path='/new-tutorial' component={NewTutorialForm}/>
      <Route path='/articles' 
        render={props => <Find
        {...props} 
        search={search} 
        validationSchema={validationSchema} />}
      />
      {/* <SignUp/> Took this out -- made it the Home link */}
    </div>
  );
}

export default App;
