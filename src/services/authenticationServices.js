import apiHelper,{ SERVICE_URL } from '../utils/apiHelper';
import axios from 'axios';

export const signUp = (userDetails)=>{
    return axios.post(SERVICE_URL+'/api/user/create', {
       ...userDetails.values,
      })
}

export const login = ({ email, password })=>{
      return axios.post(SERVICE_URL+'/api/login', {
        email,
        password,
    })
}

export const loginAsGuest = () =>{
    return axios.post(SERVICE_URL+'/api/login/guest-user', {
       isGuest:true
    });
} 

export const sendResetPasswordEmail=(email) =>{
    return axios.post(SERVICE_URL+'/api/user/password-reset-mail',{ email })
}

export const resetPassword=({
    email,
    password: newPassword,
    token
})=>{
    return axios.post(
        SERVICE_URL+'/api/user/password-reset',
        {
            email,
            newPassword,
            token 
        }
    );
}