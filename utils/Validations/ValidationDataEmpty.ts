import { loginFormat } from "../interfaces/loginFormat";
import { publicationFormat } from "../interfaces/publicationFormat";
import { registerComments } from "../interfaces/registerComment";
import { registerFormat } from '../interfaces/registerFormat';
import { registerFriendly } from "../interfaces/registerFriendly";
import { updateFormat } from '../interfaces/updateFormat';

export function validationDataEmpty(data:(loginFormat | publicationFormat | registerFormat | updateFormat | registerComments | registerFriendly)){
    
    (Object.keys(data) as (keyof typeof data)[]).forEach((key, index) => {
      console.log("La data 2 es : "+ data[key]);
        if (data[key] === '' || data[key]===null || data[key]===undefined) {
          throw new Error('Hay datos faltantes en .. ' + key);
        }
      });
}