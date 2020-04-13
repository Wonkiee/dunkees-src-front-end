import constants from './constants';

const { jwtToken } = constants;

export const setJwtToken=(token)=>{
localStorage.setItem(jwtToken,token);
}

export const getJwtToken=()=> localStorage.getItem(jwtToken);