import React, { useState }  from 'react';
import './shoppingForm.scss';
import { Col, Button, Form, Input,  ListGroup, ListGroupItem, Label,Row, FormGroup } from 'reactstrap';
import InputSelector from '../InputSelector';
import ItemList from'../ItemList';

const ShoppingForm = () => {
    const [ items,setItems ]=useState([]);
    const [ itemName,setItemName ]=useState('');
    const [ itemQty,setItemQty ]=useState('');
    const [ brand,setBrand ]=useState('');
    const [ editIndex,setEditIndex ]=useState(null);

    const resetStates=()=>{
        setEditIndex(null);
        setItemName('');
        setItemQty('');
        setBrand('');
     }
     
    const onClickAddItem = () => {
        const item={ itemName,itemQty,brand };
        const updatedItems=[ ...items,item ];
        setItems(updatedItems)
        resetStates();
    };

    const onClickEditItem=()=>{
        const item={ itemName,itemQty,brand };
        const updatedItems=[ ...items ];
        updatedItems[ editIndex ]=item;
        setItems(updatedItems)
        setEditIndex(null);
    }

    const onClickCancelEdit=()=>{
        resetStates();
     }

    const deleteItem=(index)=>{
        const updatedItems=[ ...items ];
        updatedItems.splice(index,1);
        setItems(updatedItems);
     }

     const editItem=(index)=>{
        const item=items[ index ] ;
        setItemName(item.itemName);
        setItemQty(item.itemQty);
        setBrand(item.brand);
        setEditIndex(index);
     }

    return (
        <>
            <Form>
                <Row form>
                    <Col md={ 6 }>
                        <FormGroup>
                            <Label for="itemName">Item Name</Label>
                            <Input 
                            id="itemName" 
                            placeholder="name" 
                            value={ itemName }
                            onChange={ (e)=>setItemName(e.target.value) }/>
                        </FormGroup>
                    </Col>
                    <Col md={ 6 }>
                        <FormGroup>
                            <Label for="itemQty">Item quantity</Label>
                            <Input 
                            id="itemQty" 
                            placeholder="quantity" 
                            min={ 0 } 
                            max={ 100 } 
                            type="number" 
                            step="1" 
                            value={ itemQty }
                            onChange={ (e)=>setItemQty(e.target.value) } />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="brand">Select a brand</Label>
                    <Input 
                    id="brand" 
                    placeholder="Any(Default)" 
                    value={ brand }
                    onChange={ (e)=>setBrand(e.target.value) }/>
                </FormGroup>
                {editIndex===null && <Button outline  onClick={ onClickAddItem } color="primary" size="lg" block>Add Item</Button>}
                {editIndex!==null && 
                <>
                    <Button outline  onClick={ onClickEditItem } color="primary" size="md" block>Edit Item</Button>
                    <Button outline  onClick={ onClickCancelEdit } color="primary" size="md" block>Cancel Edit</Button>
                </>}

            </Form>
            <div check row className="Shopping-Form-continue">
                <Col  sm={ { size: 4, offset: 4 } }>
                    <Button color="primary" size="lg" block>Continue</Button>
                </Col>
            </div>
            <ItemList 
            items={ items }
            deleteItem={ deleteItem }
            editItem={ editItem }
            />
        </>
    );
};

export default ShoppingForm;