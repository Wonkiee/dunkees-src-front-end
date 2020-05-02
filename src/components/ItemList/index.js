import React, { useState }  from 'react';
import { Col, Button, Form, Input,  ListGroup, ListGroupItem, Label,Row, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const ItemList=({ items })=>{
    const onClickEdit=()=>{
        console.log('edit')
    }
    
    const onClickDelete=()=>{
        console.log('delete')
    }

return(
    <>
        {items &&
        <ListGroup>
            <h1>Item List</h1>
            <ListGroupItem>
                <Row>
                    <Col>Name</Col>
                    <Col>Qty</Col>
                    <Col>Brand</Col>
                    <Col></Col>
                </Row>
            </ListGroupItem>
            {items.map((item)=>(
                <ListGroupItem>
                    <Row>
                        <Col> {item.itemName}</Col>
                        <Col> {item.itemQty}</Col>
                        <Col> {item.brand}</Col>
                        <Col>
                            <FontAwesomeIcon icon={ faEdit  } onClick={ onClickEdit }/>
                            <FontAwesomeIcon icon={ faTrash  } onClick={ onClickDelete }/>
                        </Col>
                    </Row>
                </ListGroupItem>
    ))}
        </ListGroup>
        }
    </>
)
};

export default ItemList;