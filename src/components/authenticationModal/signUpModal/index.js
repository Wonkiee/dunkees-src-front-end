import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import SignUpForm from './SignUpForm';

const SignUpModal = ({ isSignUpModalVisible, openLoginModal }) => {
   return (
       <Modal isOpen={ isSignUpModalVisible } centered>
           <ModalHeader >
               Sign Up
           </ModalHeader>
           <ModalBody>
               <SignUpForm openLoginModal={ openLoginModal } />
           </ModalBody>
       </Modal>
      );
  }
  
  export default SignUpModal;