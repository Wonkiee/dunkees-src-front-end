import React, { useState }  from 'react';
import './shoppingForm.scss';
import { Col, Button, Form, Input,  ListGroup, ListGroupItem, Label,Row, FormGroup } from 'reactstrap';
import InputSelector from '../InputSelector';
import ItemList from'../ItemList';

const ShoppingForm = () => {
    const [ items,setItems ]=useState([]);
    const [ itemName,setItemName ]=useState(null);
    const [ itemQty,setItemQty ]=useState(null);
    const [ brand,setBrand ]=useState('any');

    const onClickAddItem = () => {
        const item={ itemName,itemQty,brand };
        const updatedItems=[ ...items,item ];
        setItems(updatedItems)
    };

    return (
        <>
            <Form>
                <Row form>
                    <Col md={ 6 }>
                        <FormGroup>
                            <Label for="itemName">Item Name</Label>
                            <Input id="itemName" placeholder="name" onChange={ (e)=>setItemName(e.target.value) }/>
                        </FormGroup>
                    </Col>
                    <Col md={ 6 }>
                        <FormGroup>
                            <Label for="itemQty">Item quantity</Label>
                            <Input id="itemQty" placeholder="quantity" min={ 0 } max={ 100 } type="number" step="1" onChange={ (e)=>setItemQty(e.target.value) } />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="brand">Select a brand</Label>
                    <Input id="brand" placeholder="Any(Default)" onChange={ (e)=>setBrand(e.target.value) }/>
                </FormGroup>
                <Button outline  onClick={ onClickAddItem } color="primary" size="lg" block>Add Item</Button>
            </Form>
            <div check row className="Shopping-Form-continue">
                <Col  sm={ { size: 4, offset: 4 } }>
                    <Button color="primary" size="lg" block>Continue</Button>
                </Col>
            </div>
            <ItemList 
            items={ items }
            setItemName={ setItemName }
            setItemQty={ setItemQty }
            />
        </>
    );
};

export default ShoppingForm;