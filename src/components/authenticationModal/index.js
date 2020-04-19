import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,ButtonGroup } from 'reactstrap';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import ResetPasswordForm from './ResetPasswordForm';
import { ReactComponent as Logo } from '../../assets/Dunkees_logo.svg'
import './authenticationModal.scss'

const AuthenticationModal = () => {
     const [ modal, setModal ] = useState(true);
     const [ isLoginForm, setIsLoginForm ]= useState(false);
     const [ isSignUpForm, setIsSignUpForm ]= useState(false);
     const [ isResetPasswordForm, setIsResetPasswordForm ]= useState(false);

     const toggle = () => setModal(!modal);

    return (
        <Modal isOpen={ modal } toggle={ toggle } className="authenticationModal" centered>
            <ModalHeader toggle={ toggle }>
                {isLoginForm && !isResetPasswordForm && 'Login'}
                {isSignUpForm && 'Sign Up'}
                {isResetPasswordForm && 'Reset Password'}
            </ModalHeader>
            <ModalBody>
                { !isLoginForm && !isSignUpForm && 
                <>
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
                        onClick={ ()=>setIsLoginForm(true) }>
                            Login
                        </Button>
                    </div> 
                </>}
                {isLoginForm && 
                !isResetPasswordForm &&
                <LoginForm 
                    closeModal={ ()=>setModal(false) } 
                    setIsResetPasswordForm={ ()=>setIsResetPasswordForm(true) }/>
                }
                {isSignUpForm && 
                <SignUpForm   
                closeModal={ ()=>setModal(false) } />
                }
                {isResetPasswordForm &&
                <ResetPasswordForm   
                closeModal={ ()=>setModal(false) } />
                }
            </ModalBody>
        </Modal>
      );
  }
  
  export default AuthenticationModal;