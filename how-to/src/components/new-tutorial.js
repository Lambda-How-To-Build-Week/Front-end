import React, { Component } from "react";
import axios from "axios";
import { fetchItem, newTutorial } from "../store/actions/index";
import { connect } from "react-redux";
import styled from "styled-components";

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
