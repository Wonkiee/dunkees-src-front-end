import React, { useState }  from 'react';
import './deliveryDetailsForm.scss';
import { Col, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { submitDeliveryDetails } from '../../services/orderServices';

const validationSchema= Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('This field is required'),
    contactNumber:Yup.string().required('This field is required'),
    address: Yup.string().required('This field is required'),
    district: Yup.string().required('This field is required'),
    zip: Yup.string(),
    deliveryNotes: Yup.string(),
  });

const DeliveryDetails = (props) => {
    const [ showDeliveryDetailsForm ] = useState(true);

    const formik = useFormik({
        initialValues: {
            name: '',
            contactNumber:'',
            address:'',
            district:'',
            zip:'',
            deliveryNotes:''
        },
        validationSchema,
        onSubmit: values => {
            console.log(values)
            submitDeliveryDetails({ ...values });
        },
      });

    const DeliveryDetailsForm = () => (
        <div className="Form-margin">
            <Form onSubmit={ formik.handleSubmit }>
                <FormGroup row>
                    <Label sm={ { size: 2, offset: 3 } } align="left" for="exampleEmail">Name</Label>
                    <Col  sm={ { size: 4, offset: 0 } }>
                        <Input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Name"
                        value={ formik.values.name }
                        onChange={ formik.handleChange }
                        invalid={ formik.touched.name && !!formik.errors.name } />
                        <FormFeedback>{formik.errors.name}</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={ { size: 2, offset: 3 } } align="left" for="exampleEmail">Contact Number</Label>
                    <Col sm={ { size: 4, offset: 0 } }>
                        <Input 
                        type="text" 
                        name="contactNumber" 
                        id="contactNumber" 
                        placeholder="07xxxxxxxx"
                        value={ formik.values.contactNumber }
                        onChange={ formik.handleChange }
                        invalid={ formik.touched.contactNumber && !!formik.errors.contactNumber }  />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={ { size: 2, offset: 3 } } align="left"  for="exampleAddress">Address</Label>
                    <Col sm={ { size: 4, offset: 0 } }>
                        <Input 
                        type="textarea"
                        name="address" 
                        id="address" 
                        placeholder="1234 Main St, Jambugasmulla, Nugegoda"
                        value={ formik.values.address }
                        onChange={ formik.handleChange }
                        invalid={ formik.touched.address && !!formik.errors.address }  />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={ { size: 2, offset: 3 } } align="left" for="exampleEmail">District</Label>
                    <Col sm={ { size: 4, offset: 0 } }>
                        <Input 
                        type="text" 
                        name="district" 
                        id="district" 
                        placeholder="Colombo"
                        value={ formik.values.district }
                        onChange={ formik.handleChange }
                        invalid={ formik.touched.district && !!formik.errors.district }  />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={ { size: 2, offset: 3 } } align="left" for="exampleEmail">Zip Code</Label>
                    <Col sm={ { size: 4, offset: 0 } }>
                        <Input 
                        type="text" 
                        name="zip" 
                        id="zip" 
                        placeholder="(Optional)"
                        value={ formik.values.zip }
                        onChange={ formik.handleChange }
                        invalid={ formik.touched.zip && !!formik.errors.zip }  />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={ { size: 2, offset: 3 } } align="left" for="exampleText">Delivery Notes</Label>
                    <Col  sm={ { size: 4, offset: 0 } }>
                        <Input 
                        type="textarea" 
                        name="deliveryNotes"
                        id="deliveryNotes" 
                        placeholder="(Optional)"
                        value={ formik.values.deliveryNotes }
                        onChange={ formik.handleChange }
                        invalid={ formik.touched.deliveryNotes && !!formik.errors.deliveryNotes }  />
                    </Col>
                </FormGroup>
                <div check row className="Shopping-Form-submit">
                    <Col  sm={ { size: 6, offset: 3 } }>
                        <Button  type="submit" color="primary" size="lg" block>Start Shopping</Button>
                    </Col>
                </div>
            </Form>
        </div>
    );

    return (
        <div>
            { showDeliveryDetailsForm ? <DeliveryDetailsForm /> : null }
        </div>
    );
};

export default DeliveryDetails;