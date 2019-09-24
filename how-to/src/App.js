import React from 'react';
import './App.css';
import SignUp from "./components/sign-up";
import {Route} from "react-router-dom";
import LogIn from "./components/logIn-form"

function App() {
  return (
    <div className="App">
     <LogIn/>
    </div>
  );
}

export default App;
