import React, { Component } from "react";
import NewTutorialForm from "./new-tutorial";
import { fetchItem } from "../store/actions/index";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { itemReducer } from "../store/reducers/index";

class MyItems extends Component {
  componentDidMount() {
    this.props.fetchItem();
  }
  render() {
    console.log(this.props);
    return (
      <div className="finished-tutorial-page">
        <h1>My Tutorials</h1>
        <div className="cards-container">
          {this.props.data &&
            this.props.data.map(data => (
              <NewTutorialForm key={data.id} data={data} />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  fetching: state.fetching,
  error: state.error
});
export default connect(
  mapStateToProps,
  { fetchItem }
)(MyItems);
