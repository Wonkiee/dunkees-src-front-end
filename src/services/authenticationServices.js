import axios from 'axios';
import { setJwtToken } from '../utils/storage';

export const signUp = ()=>{

}

export const login = ({ email, password })=>{
    return axios.post('/api/login/', {
        email,
        password
      })
 
}
