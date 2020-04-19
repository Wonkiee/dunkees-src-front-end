import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, FormGroup, Input,FormFeedback, Alert } from 'reactstrap';
import { login } from '../../services/authenticationServices';
import { setJwtToken } from '../../utils/storage';
import messages from '../../utils/messages';

const validationSchema= Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is required'),
  password: Yup.string().required('This field is required'),
});

const ResetPasswordForm = ({ closeModal }) => {
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