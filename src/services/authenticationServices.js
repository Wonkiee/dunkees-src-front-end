import axios from 'axios';

export const signUp = ()=>{

}

export const login = ({ email, password })=>{
    axios.post('/api/login/', {
        email,
        password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
