import { globalUser } from "../interfaces/globalUser";


export interface storageDefaultChat{
  addressEmail: string,
   foto: string,
    idUsers: any 
}
export const getDefafultChatStorage = (): storageDefaultChat | null => {
    const storage = localStorage.getItem('defaultChat');
    if(!storage){
      return null;
    }
    return JSON.parse(storage);
  } 
  export const setDefaultChatStorage = (data:storageDefaultChat) => {
        localStorage.setItem('defaultChat', JSON.stringify(data));
  }
  export const cleanDefaultChatStorage = () => {
    localStorage.removeItem('defaultChat');
}
  