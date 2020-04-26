import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ResetPasswordModal = ({ isResetPasswordModalVisible }) => {
   return (
       <Modal isOpen={ isResetPasswordModalVisible } centered>
           <ModalHeader >
               Reset password Modal
           </ModalHeader>
           <ModalBody>
               {/* TODO */}
           </ModalBody>
       </Modal>
      );
  }
  
  export default ResetPasswordModal;