import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, FormGroup, Input,FormFeedback, Alert } from 'reactstrap';
import { login } from '../../../services/authenticationServices';
import { setJwtToken } from '../../../utils/storage';
import messages from '../../../utils/messages';

const validationSchema= Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is required'),
  password: Yup.string().required('This field is required'),
});

const LoginForm = ({ closeModal, showResetPasswordModal }) => {
  const [ hasError , setHasError ]= useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
    },
    validationSchema,
    onSubmit: values => {
        login({ ...values })
        .then(function (response) {
          console.log(response)
          if(response && response.token){
              setJwtToken(token)
              closeModal();
          }
        })
        .catch(function (error) {
          setHasError(true);
          console.log(error)
          return error;
        });
    },
  });

  return (
      <Form onSubmit={ formik.handleSubmit }>
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
                type="password" 
                name="password" 
                id="password" 
                placeholder="Password" 
                value={ formik.values.password }
                onChange={ formik.handleChange }
                invalid={ formik.touched.password && !!formik.errors.password } />
              <FormFeedback>{formik.errors.password}</FormFeedback>
          </FormGroup>
          <div className="footer-buttons">
              <Button type="submit" >{messages.buttonText.submit}</Button>
              <Button color="link" onClick={ ()=>showResetPasswordModal() }>Forgot password?</Button>
          </div>

          {hasError && 
          <Alert color="danger" className="margin-top">
              {messages.loginForm.errorMessage}
          </Alert>
          }
      </Form>
    
  );
};

export default LoginForm;