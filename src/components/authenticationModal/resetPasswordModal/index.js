import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody ,InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import { sendResetPasswordEmail } from '../../../services/authenticationServices';
import  ResetPasswordForm  from './ResetPasswordForm';

const ResetPasswordModal = ({ isResetPasswordModalVisible, openLoginModal }) => {
    const [ email, setEmail ]=useState(null);
    const [ isEmailSent, setIsEmailSent ]=useState(false);

    const onClickSendEmail=()=>{
        setIsEmailSent(true) 
        sendResetPasswordEmail(email);
    }

return (
    <Modal isOpen={ isResetPasswordModalVisible } centered>
        <ModalHeader >
            {!isEmailSent && 'Please enter the email the token needs to be send to.'}    
            {isEmailSent && 'Check your email and enter the token you have received with the new password.'}         
        </ModalHeader>
        <ModalBody>
            {!isEmailSent ?    
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" onChange={ (e)=>setEmail(e.target.value) }/>
                    <InputGroupAddon addonType="append">
                        <Button color="secondary" onClick={ onClickSendEmail }>
                            Send Email
                        </Button>
                    </InputGroupAddon>
                </InputGroup> : 
                <ResetPasswordForm openLoginModal={ openLoginModal }/>
                }
             
        </ModalBody>
    </Modal>
      );
  }
  
  export default ResetPasswordModal;