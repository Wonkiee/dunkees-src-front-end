import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, FormGroup, Input,FormFeedback, Alert } from 'reactstrap';
import { resetPassword } from '../../../services/authenticationServices';
import messages from '../../../utils/messages';

const validationSchema= Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is required'),
  password: Yup.string().required('This field is required'),
  token:Yup.string().required('This field is required'),
});

const ResetPasswordForm = ({ openLoginModal }) => {
  const [ hasError , setHasError ]= useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
      token:''
    },
    validationSchema,
    onSubmit: values => {
      resetPassword({ ...values })
        .then(function (response) {
          openLoginModal();
        })
        .catch(function (error) {
          setHasError(true);
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
                placeholder="New password" 
                value={ formik.values.password }
                onChange={ formik.handleChange }
                invalid={ formik.touched.password && !!formik.errors.password } />
              <FormFeedback>{formik.errors.password}</FormFeedback>
          </FormGroup>
          <FormGroup>
              <Input 
                type="text" 
                name="token" 
                id="token" 
                placeholder="Token" 
                value={ formik.values.token }
                onChange={ formik.handleChange }
                invalid={ formik.touched.token && !!formik.errors.token } />
              <FormFeedback>{formik.errors.token}</FormFeedback>
          </FormGroup>
          <Button type="submit" >{messages.buttonText.submit}</Button>

          {hasError && 
          <Alert color="danger" className="margin-top">
              {messages.loginForm.errorMessage}
          </Alert>
          }
      </Form>
    
  );
};

export default ResetPasswordForm;