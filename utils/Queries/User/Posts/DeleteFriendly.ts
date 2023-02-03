import { CONFIG } from '../../../Config/host';
import { registerFriendly } from '../../../interfaces/registerFriendly';
import { returnToken } from '../../../Token/ReturnToken';

export async function deleteFriendly(profile:string){
 
    console.log(await returnToken());
    const headers = {
        "content-type": "application/json",
        Authorization: "Bearer " + await returnToken(),
      };
    
      const requestBody = {
        query: `mutation RemoveFriendly($userReceived: String!) {
          removeFriendly(userReceived: $userReceived)
        }`,
        variables: {
            userReceived: profile
        },
      };
  
      

      const options = {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers
    };

    const response = await (await fetch(CONFIG.host+'/graphql', options)).json();
    return response;
}