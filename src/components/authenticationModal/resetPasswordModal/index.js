import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

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