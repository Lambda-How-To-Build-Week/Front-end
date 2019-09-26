import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from "styled-components"

const StyledSection = styled.section `
    input{
        margin-right: 1rem;
        border: 1px solid white;
    }
    button{
        border: 1px solid #E76E3C;
        padding: 0.2rem 0.5rem;
        border-radius: 50%;

        &:hover{
            color: #E76E3C;
            background-color: lightgrey;
        }
    }
   
    
`


function Find (props) {
    const {search, validationSchema} = props;

    return (
        <Formik 
            validationSchema={validationSchema}
            initialValues={{title: ''}}
            onSubmit={search}
            render={props => {
                return (
                <Form>
                    <StyledSection>
                     <div>
                    <label>Find Tutorial</label>
                    <Field name='name' type='text' />
                    <ErrorMessage name='name' component='div' />
                    <button type="submit">Submit</button>
                    </div>
                    </StyledSection>
                </Form>
                )
            }}
        />
    );
}

export default Find;