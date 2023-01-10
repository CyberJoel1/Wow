import { loginFormat } from "../interfaces/loginFormat";
import { publicationFormat } from "../interfaces/publicationFormat";
import { registerFormat } from '../interfaces/registerFormat';
import { updateFormat } from '../interfaces/updateFormat';

export function validationDataEmpty(data:(loginFormat | publicationFormat | registerFormat | updateFormat)){
  
    (Object.keys(data) as (keyof typeof data)[]).forEach((key, index) => {
        if (data[key] === '') {
          return new Error('Hay datos faltantes en .. ' + key);
        }
      });
}