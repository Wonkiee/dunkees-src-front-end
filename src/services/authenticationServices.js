import { SERVICE_URL } from '../utils/apiHelper';
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
