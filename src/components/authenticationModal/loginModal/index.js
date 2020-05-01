import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import LoginForm from './LoginForm';

const LoginModal = ({ isLoginModalVisible, openResetModal }) => {
   return (
       <Modal isOpen={ isLoginModalVisible } centered>
           <ModalHeader >
               Login
           </ModalHeader>
           <ModalBody>
               <LoginForm openResetModal={ openResetModal }/>
           </ModalBody>
       </Modal>
      );
  }
  
  export default LoginModal;