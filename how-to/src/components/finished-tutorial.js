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
    return (
      <div className="finished-tutorial-page">
        <div>
          <NavLink to="/add">
            <button>Add Item</button>
          </NavLink>
          <NavLink to="/protected">
            <button>Back</button>
          </NavLink>
        </div>
        <h1>My Items</h1>
        <div className="cards-container">
          {this.props.data.map(data => (
            <NewTutorialForm key={data.id} data={data} />
          ))}
        </div>
      </div>
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
// import React from "react";

// const ItemCard = props => {
//   console.log(props.data.id);
//   return (
//     <div className="tutorial-card">
//       <h2>{props.data.tutorial}</h2>
//       <p>Description : {props.data.description}</p>
//       <p>Steps : ${props.data.steps}</p>
//       <p>Tags : {props.data.tags}</p>
//     </div>
//   );
// };

// export default ItemCard;
