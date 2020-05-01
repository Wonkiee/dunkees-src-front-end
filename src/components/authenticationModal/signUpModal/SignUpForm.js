import React, { useState }from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, FormGroup, Input,FormFeedback, Alert } from 'reactstrap';
import constants from '../../../utils/constants';
import { signUp } from '../../../services/authenticationServices';
import messages from '../../../utils/messages';

const { phoneRegExp } =constants;
const validationSchema= Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('This field is required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('This field is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is required'),
  phoneNumber:Yup.string().required('This field is required'),
  password: Yup.string().required('This field is required'),
  confirmPassword:Yup.string().when('password', {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [ Yup.ref('password') ],
      'Both password need to be the same'
    )
  }).required('This field is required'),
});

const SignUpForm = ({ openLoginModal }) => {
  const [ hasError , setHasError ]= useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber:'',
      password:'',
      confirmPassword:'',
    },
    validationSchema,
    onSubmit: values => {
      signUp({ values })
      .then(function () {
        openLoginModal();
      })
      .catch(function (error) {
        setHasError(true);
        return error;
      });
    },
  });

  return (
      <Form onSubmit={ formik.handleSubmit }>
          <FormGroup>
              <Input type="text"
                name="firstName" 
                id="firstName"  
                placeholder="First Name"  
                value={ formik.values.firstName }
                onChange={ formik.handleChange }
                invalid={ formik.touched.firstName && !!formik.errors.firstName } />
              <FormFeedback>{formik.errors.firstName}</FormFeedback>
          </FormGroup>
    
          <FormGroup>
              <Input
                type="text" 
                name="lastName" 
                id="lastName" 
                placeholder="Last Name" 
                value={ formik.values.lastName }
                onChange={ formik.handleChange }
                invalid={ formik.touched.lastName && !!formik.errors.lastName }/>
              <FormFeedback>{formik.errors.lastName}</FormFeedback>
          </FormGroup>

          <FormGroup>
              <Input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Email" 
                value={ formik.values.email }
                onChange={ formik.handleChange }
                invalid={ formik.touched.email && !!formik.errors.email } />
              <FormFeedback>{formik.errors.email}</FormFeedback>
          </FormGroup>

          <FormGroup>
              <Input 
                type="text" 
                name="phoneNumber" 
                id="phoneNumber" 
                placeholder="phoneNumber" 
                value={ formik.values.phoneNumber }
                onChange={ formik.handleChange }
                invalid={ formik.touched.phoneNumber && !!formik.errors.phoneNumber } />
              <FormFeedback>{formik.errors.phoneNumber}</FormFeedback>
          </FormGroup>

          <FormGroup>
              <Input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Password" 
                value={ formik.values.password }
                onChange={ formik.handleChange }
                invalid={ formik.touched.password && !!formik.errors.password } />
              <FormFeedback>{formik.errors.password}</FormFeedback>
          </FormGroup>

          <FormGroup>
              <Input 
                type="password" 
                name="confirmPassword" 
                id="confirmPassword" 
                placeholder="Confirm Password" 
                value={ formik.values.confirmPassword }
                onChange={ formik.handleChange }
                invalid={ formik.touched.confirmPassword && !!formik.errors.confirmPassword } />
              <FormFeedback>{formik.errors.confirmPassword}</FormFeedback>
          </FormGroup>

          <Button type="submit" >Submit</Button>
          {hasError && 
              <Alert color="danger" className="margin-top">
                  {messages.loginForm.errorMessage}
              </Alert>
          }
      </Form>   
  );
};

export default SignUpForm;