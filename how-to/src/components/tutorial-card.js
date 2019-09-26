import React from "react";
import { connect } from "react-redux";
import { updateItem, deleteItem } from "../store/actions/index";
import { NavLink } from "react-router-dom";

const ItemCard = props => {
  console.log(props.data.id);
  return (
    <div className="item-card">
      <h2>{props.data.title}</h2>
      <p>Description : {props.data.description}</p>
      <p>Steps : {props.data.steps}</p>
      <p>Tags : {props.data.tags}</p>

      <div className="btnctnr">
        {/* <NavLink to={`/items/${props.data.id}/edit`}> */}
        <NavLink to={`/edit-tutorial`}>
          <button>Edit</button>
        </NavLink>
        <button
          onClick={() => {
            props.deleteItem(props.data.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  { updateItem, deleteItem }
)(ItemCard);
