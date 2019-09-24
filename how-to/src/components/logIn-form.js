import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
                    <button>Log In!</button>
                </Form>
            )

        }}/>
            
        
    )


}


export default LogIn;