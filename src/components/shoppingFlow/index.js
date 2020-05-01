import React, { useState }  from 'react';
import './shoppingForm.scss';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';

const ShoppingFlow = (props) => {
    const [ showShippingForm ] = React.useState(true);
    const [ showBackButton ] = React.useState(false);

    const onClickAddItem = () => {
        console.log("add item");
    };

    const onClickBackButton = () => {

    };

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
            { showShippingForm ? <ShoppingForm /> : null }
            { showBackButton ? <BackButton /> : null }
        </div>
    );
};

export default ShoppingFlow;