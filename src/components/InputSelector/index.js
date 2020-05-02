import React, { useState }  from 'react';
import { Button, Input, Label, Col, InputGroup, InputGroupAddon } from 'reactstrap';

const InputSelector=({ name })=>{

    const [ brands,setBrands ]=useState([ 'any(default)' ]);
    const [ brandName,setBrandName ]=useState(null);

    const onClickAddBrand=()=>{
        const updatedBrands=[ ...brands,brandName ];
        setBrands(updatedBrands);
    }

    return (
        <>
            <Col md={ 12 }>
                <InputGroup>
                    <Input type="select" name={ name } id={ name }>
                        {brands.map((brand)=>(
                            <option key={ brand } selected>{brand}</option>
                    ))}
                    </Input>
                    <span>&nbsp;</span>
                    <Input placeholder="name(optional)" onChange={ (e)=>setBrandName(e.target.value) }/>

                    <InputGroupAddon addonType="append">
                        <Button onClick={ onClickAddBrand }>Add a new brand</Button>
                    </InputGroupAddon>
                </InputGroup>
            </Col>
        </>
    )
}

export default InputSelector;