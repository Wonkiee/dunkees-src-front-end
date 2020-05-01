import React, { useState }  from 'react';
import './deliveryDetailsForm.scss';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const DeliveryDetails = (props) => {
    const [ showDeliveryDetailsForm ] = React.useState(true);

    const onClickDeliveryDetailsForm = () => {

    };

    const DeliveryDetailsForm = () => (
        <div className="Form-margin">
            <h2 className="Shopping-Form-header">Delivery Details</h2>
            <Form>
                <FormGroup row>
                    <Label sm={ { size: 2, offset: 3 } } align="left" for="exampleEmail">Name</Label>
                    <Col  sm={ { size: 4, offset: 0 } }>
                        <Input type="text" name="name" id="name" placeholder="John Doe" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={ { size: 2, offset: 3 } } align="left" for="exampleEmail">Contact Number</Label>
                    <Col sm={ { size: 4, offset: 0 } }>
                        <Input type="text" name="contactNumber" id="contactNumber" placeholder="07xxxxxxxx" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={ { size: 2, offset: 3 } } align="left"  for="exampleAddress">Address</Label>
                    <Col sm={ { size: 4, offset: 0 } }>
                        <Input type="textarea" name="address1" id="address1" placeholder="1234 Main St, Jambugasmulla, Nugegoda"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={ { size: 2, offset: 3 } } align="left" for="exampleEmail">District</Label>
                    <Col sm={ { size: 4, offset: 0 } }>
                        <Input type="text" name="district" id="district" placeholder="Colombo"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={ { size: 2, offset: 3 } } align="left" for="exampleEmail">Zip Code</Label>
                    <Col sm={ { size: 4, offset: 0 } }>
                        <Input type="text" name="zip" id="zip" placeholder="(Optional)"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={ { size: 2, offset: 3 } } align="left" for="exampleText">Delivery Notes</Label>
                    <Col  sm={ { size: 4, offset: 0 } }>
                        <Input type="textarea" name="deliveryNotes" id="deliveryNotes" placeholder="(Optional)"/>
                    </Col>
                </FormGroup>
                <div check row className="Shopping-Form-submit">
                    <Col  sm={ { size: 6, offset: 3 } }>
                        <Button  onClick={ onClickDeliveryDetailsForm } color="primary" size="lg" block>Start Shopping</Button>
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