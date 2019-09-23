import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';


const StyledForm = styled.div `

    margin-top: 8%;
    height: 90vh;
    color: #E76E3C;

    Form{
        border: 1px solid #E76E3C;
        width: 70%;
        margin: 5% auto 2% auto;
        padding: 3rem 1rem;
        border-radius: 5rem;
        
        

        Form::before{
        background-image: url('https://avatars1.githubusercontent.com/u/44746253?s=400&v=4');
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

        label{
            display: block;
            width: 80%;
            margin: 2rem auto;

            input[type = "text"], input[type = "email"], input[type = "password"]{
                border: 1px solid #E76E3C;
                width: 70%;
                display: block;
                margin: 1rem auto 2rem auto;
                padding: 0.5rem 0;
             }
        }
        
        button{
            width: 20%;
            padding: 1rem;
            background-color: #E76E3C;
            color: white;
        }
        
    }

    p{
        color: black;
        background-color: white;
        border: 1px solid red;
        width: 20%;
        margin: 0 auto;
        padding: 1rem;
    }

    a{
        color: #E76E3C;
        text-decoration: none;

        &: hover{
            text-decoration: underline;
        }
    }


    
`


const initialUser = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function SignUp(props){

    const {addUser, validationSchema} = props


    return(
        <Formik
        validationSchema ={validationSchema}
        initialValues = {initialUser}
        onSubmit = {addUser}
        render = {props => {
            return(
                <StyledForm>
                <Form>
                    <h1>How To</h1>
                    <label>
                        Name
                        <Field name = "name" type ="text" />
                        <ErrorMessage name='name' component='div' />
                    </label>
                    <label>
                        Email
                        <Field name = "email" type ="email"/>
                        <ErrorMessage name='email' component='div' />
                    </label>
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
                    <button>Sign Up!</button>
                </Form>
                <p>Have an account? <a href ="#">Log In</a> </p>
                </StyledForm>
            )

        }}/>
            
        
    )


}


export default SignUp;