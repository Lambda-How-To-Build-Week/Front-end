import React, { Component } from "react";
import NewTutorialForm from "./new-tutorial";
import { fetchItem } from "../store/actions/index";
import LogIn from "./logIn-page";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { itemReducer } from "../store/reducers/index";
import ItemCard from "./tutorial-card";

const StyledTutorial = styled.form`

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

class MyItems extends Component {
  componentDidMount() {
    this.props.fetchItem();
  }
  render() {
    console.log(this.props);
    return (
      <StyledTutorial>
        <div className="finished-tutorial-page">
          <div className="nav">
            <h1> How-to</h1>
            <div>
              <nav>
                <div className="nav-links">
                  <a href="https://distracted-brown-8fd3b2.netlify.com/">
                    Home
                  </a>
                  <Link to="/articles">Articles</Link>
                  <Route path="/login" component={LogIn} />
                </div>
              </nav>
            </div>
          </div>
          <h1>My Tutorials</h1>
          <div className="cards-container">
            {this.props.data &&
              this.props.data.map(data => (
                <ItemCard key={data.id} data={data} />
              ))}
          </div>
        </div>
      </StyledTutorial>
    );
  }
}

const mapStateToProps = state => ({
  data: state.itemReducer.data,
  fetching: state.itemReducer.fetching,
  error: state.itemReducer.error
});
export default connect(
  mapStateToProps,
  { fetchItem }
)(MyItems);
