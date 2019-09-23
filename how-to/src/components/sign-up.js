import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';


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
                <Form>
                    <h2>How To</h2>
                    <label>
                        Name
                        <Field name = "name" type ="text" placeholder= "name"/>
                        <ErrorMessage name='name' component='div' />
                    </label>
                    <label>
                        Email
                        <Field name = "email" type ="email" placeholder= "email"/>
                        <ErrorMessage name='email' component='div' />
                    </label>
                    <label>
                        Username
                        <Field name = "username" type ="text" placeholder= "username"/>
                        <ErrorMessage name='username' component='div' />
                    </label>
                    <label>
                        password
                        <Field name = "password" type ="text" placeholder= "password"/>
                        <ErrorMessage name='password' component='div' />
                    </label>
                </Form>
            )

        }}/>
            
        
    )


}


export default SignUp;