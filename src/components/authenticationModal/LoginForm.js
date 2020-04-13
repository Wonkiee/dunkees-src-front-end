import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, FormGroup, Input,FormFeedback } from 'reactstrap';
import { login } from '../../services/authenticationServices';

const validationSchema= Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is required'),
  password: Yup.string().required('This field is required'),
});

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
    },
    validationSchema,
    onSubmit: values => {
        login({ values });
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

          <Button type="submit" >Submit</Button>
      </Form>
    
  );
};

export default LoginForm;