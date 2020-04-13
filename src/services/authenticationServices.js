import axios from 'axios';

export const signUp = (userDetails)=>{
    return axios.post('/api/user/create', {
       ...userDetails,
      })
}

export const login = ({ email, password })=>{
    return axios.post('/api/login/', {
        email,
        password,
      })
 
}
