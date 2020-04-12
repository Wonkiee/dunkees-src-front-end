import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignUpForm from './SignUpForm'
import './signUpForm.scss'

const signUpModal = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [ modal, setModal ] = useState(true);
  
    const toggle = () => setModal(!modal);
  
    return (
        <div>
            <Button color="danger" onClick={ toggle }>{buttonLabel}</Button>
            <Modal isOpen={ modal } toggle={ toggle } className={ className }>
                <ModalHeader toggle={ toggle }>Login</ModalHeader>
                <ModalBody>
                    <SignUpForm/>
                </ModalBody>
                {/* <ModalFooter>
                    <Button color="primary" onClick={ toggle }>Login</Button>
                </ModalFooter> */}
            </Modal>
        </div>
    );
  }
  
  export default signUpModal;