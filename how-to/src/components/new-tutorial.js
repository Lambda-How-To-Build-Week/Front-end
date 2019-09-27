import React, { Component } from "react";
// import axios from "axios";
import { Route, Link } from "react-router-dom";
import { fetchItem, newTutorial } from "../store/actions/index";
import { connect } from "react-redux";
import styled from "styled-components";
import LogIn from "./logIn-page";

const StyledForm = styled.form`

  box-sizing: border-box;
  padding: 0; 
  margin: 0;

  .nav{
    box-sizing: border-box;
    width: 100vw;
    margin-top: 0;
    padding: 1rem 5rem;
    background-color:#e76e3c;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

.nav a{
  padding: 25px;
  color: white;
  font-family: 'Righteous', cursive;
}

h1, h2{
  color: white;
}

  .tutorial-form{
    border: 1px solid #E76E3C;
    width: 80%;
    margin: 10% auto;
    padding: 2rem;
    border-radius: 5%;

    @media only screen and (max-width: 1000px){
      border: none;
    }



    input{
      border: 1px solid #E76E3C;
      width: 60%;
      height: 3rem;
      text-align: center;
    }

    h3{
      margin-top: 2.5rem;
    }

    button{
      border: 1px solid #E76E3C;
      margin: 2rem;
      padding: 0.5rem 1rem;
      background-color: #E76E3C;
      color: white;
      width 30%;

      &: hover{
        background-color: white;
        color: #E76E3C;
      }
    }

  }
`;

class NewTutorialForm extends Component {
  state = {
    tutorial: "",
    description: "",
    steps: "",
    tags: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const { tutorial, description, steps, tags } = this.state;
    this.props.newTutorial({ tutorial, description, steps, tags });
    this.setState({
      tutorial: "",
      description: "",
      steps: "",
      tags: ""
    });

    this.props.history.push("/finished-tutorial");
  };
  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log("ADD: ", this.state);
    return (
      <StyledForm>
        <div className="nav">
          <h1> How-to</h1>
          <div>
            <nav>
              <div className="nav-links">
                <a href="https://distracted-brown-8fd3b2.netlify.com/">Home</a>
                <Link to="/articles">Articles</Link>
                <Route path="/login" component={LogIn} />
              </div>
            </nav>
          </div>
        </div>
        <form className="tutorial-form">
          <div className="tutorial">
            <div className="add-input">
              <h3>What will you be teaching us today?</h3>
              <input
                type="text"
                value={this.state.tutorial}
                name="tutorial"
                placeholder="Tutorial Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="add-input">
              <h3>Please provide a description of your Tutorial</h3>
              <input
                type="text"
                value={this.state.description}
                name="description"
                placeholder="Describe your Tutorial"
                onChange={this.handleChange}
              />
            </div>
            <div className="add-input">
              <h3>Now add your steps to completing this Tutorial!</h3>
              <input
                type="text"
                value={this.state.steps}
                name="steps"
                placeholder="Step 1..."
                onChange={this.handleChange}
              />
            </div>
            {/* <div className="add-input">
            <h3>Step 2, lets hear it!</h3>
            <input
              type="text"
              value={this.state.steps}
              name="steps"
              placeholder="Step 2..."
              onChange={this.handleChange}
            />
          </div>
          <div className="add-input">
            <h3>Step 3, be specific!</h3>
            <input
              type="text"
              value={this.state.steps}
              name="steps"
              placeholder="Step 3..."
              onChange={this.handleChange}
            />
          </div>
          <div className="add-input">
            <h3>Step 4, now were getting somewhere!</h3>
            <input
              type="text"
              value={this.state.steps}
              name="steps"
              placeholder="Step 4..."
              onChange={this.handleChange}
            />
          </div>
          <div className="add-input">
            <h3>Final step, wrap it up! </h3>
            <input
              type="text"
              value={this.state.steps}
              name="steps"
              placeholder="Step 5..."
              onChange={this.handleChange}
            />
          </div> */}
            <div className="add-input">
              <h3>
                Please provide some tags to shine some light on your awesome
                Tutorial!
              </h3>
              <input
                type="text"
                value={this.state.tags}
                name="tags"
                placeholder="#HowTo"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" onClick={this.handleSubmit}>
              Add Tutorial
            </button>
          </div>
        </form>
      </StyledForm>
    );
  }
}

const mapStateToProps = state => {
  return { error: state.error };
};

export default connect(
  mapStateToProps,
  { newTutorial, fetchItem }
)(NewTutorialForm);
