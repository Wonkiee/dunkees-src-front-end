import React, { useState }  from 'react';
import { Col, Button, Form, Input,  ListGroup, ListGroupItem, Label,Row, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const ItemList=(props)=>{
    
    const {
        items,
        setItemName,
        setItemQty
    }=props;

return(
    <>
        {items &&
        <ListGroup>
            <h1>Item List</h1>
            {items.map((item)=>(
                <ListGroupItem>
                    <span>
                        {item.itemName}
                    </span>

                    <FontAwesomeIcon icon={ faCoffee } />
                    {/* <Input 
                    placeholder="quantity" 
                    value={ item.itemQty } 
                    min={ 0 } 
                    max={ 100 } 
                    type="number" 
                    step="1" 
                    onChange={ (e)=>setItemQty(e.target.value) } /> */}
                </ListGroupItem>
    ))}
        </ListGroup>
        }
    </>
)
};

export default ItemList;