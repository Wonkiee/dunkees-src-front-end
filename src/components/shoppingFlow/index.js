import React, { useState }  from 'react';
import './shoppingForm.scss';
import { Col, Button, Form, Collapse, FormGroup, Label, Input, FormText } from 'reactstrap';
import InputGroup from 'reactstrap/es/InputGroup';
import InputGroupAddon from 'reactstrap/es/InputGroupAddon';
import InputGroupText from 'reactstrap/es/InputGroupText';
import Row from "reactstrap/es/Row";

const ShoppingFlow = (props) => {
    const [ showDeliveryDetailsForm, setShowDeliveryDetailsForm ] = React.useState(true);
    const [ showShippingForm, setShowShippingForm ] = React.useState(false);
    const [ showBackButton, setShowBackButton ] = React.useState(false);

    const onClickAddItem = () => {
        console.log("add item");
    };

    const onClickBackButton = () => {
        setShowShippingForm(false);
        setShowBackButton(false);
        setShowDeliveryDetailsForm(true);
    };

    const onClickDeliveryDetailsForm = () => {
        setShowBackButton(true);
        setShowDeliveryDetailsForm(!showDeliveryDetailsForm);
        setShowShippingForm(!showShippingForm);
    };

    const onClickShippingForm = () => {
        setShowShippingForm(!showShippingForm);
        setShowDeliveryDetailsForm(!showDeliveryDetailsForm);
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

    const ShoppingForm = () => (
        <div className="Form-margin">
            <h2 className="Shopping-Form-header">Shopping List</h2>
            <Form>
                <FormGroup row>
                    {/*<Label sm={ { size: 2, offset: 2 } }  align="left" for="exampleEmail"></Label>*/}
                    <Col  sm={ { size: 6, offset: 3 } }>
                        <Input type="text" placeholder="Item #1" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    {/*<Label sm={ { size: 2, offset: 2 } }  align="left" for="exampleEmail"></Label>*/}
                    <Col  sm={ { size: 6, offset: 3 } }>
                        <Input type="text" placeholder="Item #2" />
                    </Col>
                </FormGroup>
                <div check row className="Shopping-Form-add-more">
                    <Col  sm={ { size: 2, offset: 5 } }>
                        <Button outline onClick={ onClickAddItem } color="primary" size="lg" block>Add Item</Button>
                    </Col>
                </div>
                <div check row className="Shopping-Form-continue">
                    <Col  sm={ { size: 4, offset: 4 } }>
                        <Button color="primary" size="lg" block>Continue</Button>
                    </Col>
                </div>
            </Form>
        </div>
    );

    const BackButton = () => (
        <div check row className="Shopping-Form-back">
            <Col  sm={ { size: 2, offset: 5 } }>
                <Button outline onClick={ onClickBackButton } color="secondary" size="lg" block>Back</Button>
            </Col>
        </div>
    );

    return (
        <div>
            { showDeliveryDetailsForm ? <DeliveryDetailsForm /> : null }
            { showShippingForm ? <ShoppingForm /> : null }
            { showBackButton ? <BackButton /> : null }
        </div>
    );
};

export default ShoppingFlow;