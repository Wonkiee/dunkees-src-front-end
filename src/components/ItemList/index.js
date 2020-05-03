import React, { useState }  from 'react';
import { Col, Button, Form, Input,  ListGroup, ListGroupItem, Label,Row, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const ItemList=({ items,deleteItem, editItem })=>{
    const onClickEdit=(e)=>{
        const index=e.target.parentNode.parentNode.dataset.index;
        editItem(parseInt(index));
    }
    
    const onClickDelete=(e)=>{
      const index=e.target.parentNode.parentNode.dataset.index;
      deleteItem(parseInt(index));
    }

return(
    <>
        {items.length>0 &&
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
            {items.map((item,index)=>(
                <ListGroupItem key={ index }>
                    <Row>
                        <Col> {item.itemName}</Col>
                        <Col> {item.itemQty}</Col>
                        <Col> {item.brand}</Col>
                        <Col data-index={ index } >
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