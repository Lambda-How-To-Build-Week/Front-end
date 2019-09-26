import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { connect } from "react-redux";
import { addUser } from "../store/actions/index";
import PrivateRoute from "../utils/authRouter";
import axios from "axios";
const StyledDiv = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  height: 50vh;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #e76e3c;
  border-radius: 5%;

  label {
    display: block;
    width: 80%;
    margin: 0.8rem auto;

    input[type="text"],
    input[type="email"],
    input[type="password"] {
      border: 1px solid #e76e3c;
      width: 90%;
      display: block;
      margin: 1rem auto 2rem auto;
      padding: 0.5rem 0;
    }
  }

  button {
    width: 50%;
    padding: 1rem;
    background-color: #e76e3c;
    color: white;
    border: 1px solid #e76e3c;

    &:hover {
      background-color: white;
      color: #e76e3c;
      border: 1px solid #e76e3c;
    }
  }

  .usage {
    width: 90%;
    display: flex;
    margin-bottom: 1rem;
  }
`;

const initialLogIn = {
  Username: "",
  Password: ""
};

function LogIn(props) {
  const { addUser, validationSchema } = props;

  const handleSubmit = (values, formikBag) => {
    axios
      .post(`https://backend-v1.herokuapp.com/api/users/login`, {
        username: values.username,
        // creator: false,
        password: values.password
        // name: values.name
      })
      .then(response => {
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
        props.history.push("/articles");
      })
      .catch(error => console.log(error));
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialLogIn}
      onSubmit={handleSubmit}
      render={props => {
        return (
          <Form>
            <StyledDiv>
              <h1>How to</h1>
              <label>
                Username
                <Field name="username" type="text" />
                <ErrorMessage name="username" component="div" />
              </label>
              <label>
                password
                <Field name="password" type="password" />
                <ErrorMessage name="password" component="div" />
              </label>
              <div className="usage">
                <label>
                  Create Post?
                  <Field name="createPost" type="radio" />
                  <ErrorMessage name="createPost" component="div" />
                </label>
                <label>
                  Read
                  <Field name="createPost" type="radio" />
                  <ErrorMessage name="createPost" component="div" />
                </label>
              </div>
              <button type="submit">Log In!</button>
            </StyledDiv>
          </Form>
        );
      }}
    />
  );
}

const mapStateToProps = state => ({
  error: state.error,
  addUser: state.addUser,
  fetchingData: state.fetchingData
});

export default connect(
  mapStateToProps,
  { addUser }
)(LogIn);
