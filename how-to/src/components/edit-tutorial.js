import React, { useEffect, useState } from "react";
import axiosWitAuth from "../utils/axiosWithAuth";
import { NavLink } from "react-router-dom";

export default function EditItem(props) {
  const editingState = {
    item: "",
    description: "",
    steps: "",
    tags: ""
  };

  const [stuff, setStuff] = useState(editingState);

  const handleChange = e => {
    setStuff({ ...stuff, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWitAuth()
      .put(`/api/auth/:user_id/posts/:post_id/${props.match.params.id}`, stuff)
      .then(res => {
        setStuff(editingState);
        props.history.push(`/finished-tutorial`);
      })
      .catch(err => console.log(err));
  };
  console.log(stuff);
  return (
    <div className="updateContainer">
      <h1>Update Item</h1>
      <form className="update-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="item"
          value={stuff.item}
          onChange={handleChange}
          placeholder="Name"
        ></input>
        <input
          type="text"
          name="description"
          value={stuff.description}
          onChange={handleChange}
          placeholder="Description"
        ></input>
        <input
          type="text"
          name="steps"
          value={stuff.steps}
          onChange={handleChange}
          placeholder="Steps"
        ></input>
        <input
          type="text"
          name="tags"
          value={stuff.tags}
          onChange={handleChange}
          placeholder="Tags"
        ></input>
        <button className="updateButton">Update</button>
      </form>
    </div>
  );
}
