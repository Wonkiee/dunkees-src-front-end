import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignUpForm from './SignUpForm'

const AuthenticationModal = () => {
     const [ modal, setModal ] = useState(true);
     const toggle = () => setModal(!modal);
  
    return (
        <Modal isOpen={ modal } toggle={ toggle } className={ className }>
            <ModalHeader toggle={ toggle }>Login</ModalHeader>
            <ModalBody>
                <SignUpForm/>
            </ModalBody>
            {/* <ModalFooter>
                    <Button color="primary" onClick={ toggle }>Login</Button>
                </ModalFooter> */}
        </Modal>
      );
  }
  
  export default AuthenticationModal;