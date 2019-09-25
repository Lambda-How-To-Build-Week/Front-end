import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from "styled-components";

const StyledDiv = styled.div `
box-sizing: border-box;
padding: 0;
margin:0;
height: 50vh;
margin: 10% auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: #E76E3C;
border-radius: 5%;

label{
    display: block;
    width: 80%;
    margin: 0.8rem auto;

    input[type = "text"], input[type = "email"], input[type = "password"]{
        border: 1px solid #E76E3C;
        width: 90%;
        display: block;
        margin: 1rem auto 2rem auto;
        padding: 0.5rem 0;
     }

    
}

button{
    width: 50%;
    padding: 1rem;
    background-color: #E76E3C;
    color: white;
}

.usage{
    width: 90%;
    display: flex;
    margin-bottom: 1rem;
}


`

const initialLogIn = {
    Username: '',
    password: ''
}


function LogIn (props){

    const {addUser, validationSchema} = props



    return(
        <Formik
        validationSchema ={validationSchema}
        initialValues = {initialLogIn}
        onSubmit = {addUser}
        render = {props => {
            return(
                <Form>
                    <StyledDiv>
                        <h1>How to</h1>
                    <label>
                        Username 
                        <Field name = "username" type ="text" />
                        <ErrorMessage name='username' component='div' />
                    </label>
                    <label>
                        password
                        <Field name = "password" type ="password" />
                        <ErrorMessage name='password' component='div' />
                    </label>
                    <div className = "usage">
                    <label>
                        Create Post?
                        <Field name = "createPost" type ="radio" />
                        <ErrorMessage name='createPost' component='div' />
                    </label>
                    <label>
                        Read
                        <Field name = "createPost" type ="radio" />
                        <ErrorMessage name='createPost' component='div' />
                    </label>
                    </div>
                    <button type ="submit">Log In!</button>
                    </StyledDiv>
                </Form>
            )

        }}/>
            
        
    )


}


export default LogIn;