import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import LoginForm from './LoginForm';

const LoginModal = ({ isLoginModalVisible, showResetPasswordModal }) => {
   return (
       <Modal isOpen={ isLoginModalVisible } centered>
           <ModalHeader >
               Login
           </ModalHeader>
           <ModalBody>
               <LoginForm 
                    closeModal={ ()=>setModal(false) } 
                    showResetPasswordModal={ showResetPasswordModal }/>
           </ModalBody>
       </Modal>
      );
  }
  
  export default LoginModal;