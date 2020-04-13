import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,ButtonGroup } from 'reactstrap';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import { ReactComponent as Logo } from '../../assets/Dunkees_logo.svg'
import './authenticationModal.scss'

const AuthenticationModal = () => {
     const [ modal, setModal ] = useState(true);
     const [ isLoginForm, setIsLoginForm ]= useState(false);
     const [ isSignUpForm, setIsSignUpForm ]= useState(false);

     const toggle = () => setModal(!modal);
     
    return (
        <Modal isOpen={ modal } toggle={ toggle } className="authenticationModal" centered>
            <ModalHeader toggle={ toggle }>
                {isLoginForm && 'Login'}
                {isSignUpForm && 'Sign Up'}
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
                <LoginForm 
                    closeModal={ ()=>setModal(false) } 
                    setError={ (error) => {
                        setError(error);
                        console.log(error)} }/>
                }
                {isSignUpForm && <SignUpForm/>}
            </ModalBody>
        </Modal>
      );
  }
  
  export default AuthenticationModal;