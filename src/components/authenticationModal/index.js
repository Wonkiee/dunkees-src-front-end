import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ButtonGroup } from 'reactstrap';
import SignUpForm from './SignUpForm';
import { ReactComponent as Logo } from '../../assets/Dunkees_logo.svg'
import './authenticationModal.scss'
import LoginModal from './loginModal';
import ResetPasswordModal from './resetPasswordModal';

const AuthenticationModal = () => {
     const [ modal, setModal ] = useState(true);
     const [ isLoginModalVisible, setIsLoginModalVisible ]= useState(false);
     const [ isSignUpForm, setIsSignUpForm ]= useState(false);
     const [ isResetPasswordModalVisible, setIsResetPasswordModalVisible ]= useState(false);

     const toggle = () => setModal(!modal);

    return (
        <>
            <Modal isOpen={ modal && !isLoginModalVisible } toggle={ toggle } className="authenticationModal" centered>
                <ModalBody>
                    <Logo/>
                    <div class="vertical-buttons">
                        <ButtonGroup vertical>
                            <Button 
                        outline 
                        color="secondary" 
                        onClick={ ()=>setIsSignUpForm(true) }>
                                Sign Up
                            </Button>
                            <Button outline color="secondary">
                                Continue as Guest
                            </Button>
                        </ButtonGroup>
                        <Button 
                        outline 
                        color="primary" 
                        className="loginButton"
                        onClick={ ()=>setIsLoginModalVisible(true) }>
                            Login
                        </Button>
                    </div> 
                    {isSignUpForm && 
                    <SignUpForm   
                closeModal={ ()=>setModal(false) } />
                }
                </ModalBody>
            </Modal>
            <ResetPasswordModal   
                    isResetPasswordModalVisible={ isResetPasswordModalVisible }
                closeModal={ ()=>setModal(false) } />
            <LoginModal 
            isLoginModalVisible={ isLoginModalVisible  && !isResetPasswordModalVisible }
            showResetPasswordModal={ () => setIsResetPasswordModalVisible(true) } />
        </>
      );
  }
  
  export default AuthenticationModal;