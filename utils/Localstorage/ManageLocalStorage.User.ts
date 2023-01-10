import { globalUser } from "../interfaces/globalUser";

export const getToken = (): globalUser => {
    return JSON.parse(localStorage.getItem('user') || '')
  } 
  export const setToken = (data:globalUser) => {
        localStorage.setItem('user', JSON.stringify(data));
  }
  