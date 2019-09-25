import { connect } from "react-redux";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import LogInPage from "./logIn-page";
import { addUser } from "../store/actions/index";
import PrivateRoute from "../utils/authRouter";
import axios from "axios";

const StyledForm = styled.div`
  margin-top: 8%;
  height: 80vh;
  color: #e76e3c;

  display: block;
  width: 80%;
  margin: 2rem auto;

  form {
    width: 70%;
    margin: 5% auto 2% auto;
    padding: 3rem 1rem;
    border-radius: 5rem;
    background-color: white;
    border: 1px solid #e76e3c;
    width: 70%;

    ::before {
      background-image: url("data:image/jpeg;base64,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");

      background-size: cover;
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
      opacity: 0.4;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"] {
      border: 1px solid #e76e3c;
      width: 70%;
      display: block;
      margin: 1rem auto 2rem auto;
      padding: 0.5rem 0;
    }

    label {
      display: block;
      width: 80%;
      margin: 2rem auto;
    }

    button {
      width: 50%;
      padding: 1rem;
      background-color: #e76e3c;
      color: white;
    }
  }

  p {
    color: black;
    background-color: white;
    width: 50%;
    margin: 0 auto;
    padding: 1rem;
  }

  a {
    color: #e76e3c;
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }
  }
`;

const initialUser = {
  // name: "",
  username: "",
  // email: "",
  password: ""
  // confirmPassword: ""
};

function SignUp(props) {
  const { addUser, validationSchema } = props;

  const handleSubmit = (values, formikBag) => {
    axios
      .post("https://backend-v1.herokuapp.com/api/users/register", {
        username: values.username,
        // creator: false,
        password: values.password
        // name: values.name
      })
      .then(response => {
        props.history.push("/login");
      })
      .catch(error => console.log(error));
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialUser}
      onSubmit={handleSubmit}
      render={props => {
        return (
          <StyledForm>
            <Form>
              <h1>How To</h1>
              {/* <label>
                Name
                <Field name="name" type="text" />
                <ErrorMessage name="name" component="div" /> */}
              {/* </label> */}
              {/* <label> */}
              {/* Email
                <Field name="email" type="email" />
                <ErrorMessage name="email" component="div" />
              </label>  */}
              <label>
                Username
                <Field name="username" type="text" />
                <ErrorMessage name="username" component="div" />
              </label>
              <label>
                Password
                <Field name="password" type="password" />
                <ErrorMessage name="password" component="div" />
              </label>
              <button type="submit">Sign Up!</button>
            </Form>
            <p>
              Have an account? <Link to="/login">Log In</Link>{" "}
            </p>
          </StyledForm>
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
)(SignUp);
