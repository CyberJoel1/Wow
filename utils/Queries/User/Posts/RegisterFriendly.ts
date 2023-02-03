import { CONFIG } from '../../../Config/host';
import { registerFriendly } from '../../../interfaces/registerFriendly';
import { returnToken } from '../../../Token/ReturnToken';
export async function registerFriendlyPersons(data: registerFriendly){
   
    console.log("La informacion ha actualizar ....................")
    console.log(data)
    console.log(await returnToken());
    const headers = {
        "content-type": "application/json",
        Authorization: "Bearer " + await returnToken(),
      };
    
      const requestBody = {
        query: `mutation Mutation($createFriendlyInput: CreateFriendlyInput!) {
          createFriendly(createFriendlyInput: $createFriendlyInput)
        }`,
        variables: {
          createFriendlyInput: {
            userReceived: data.userReceived,
            },
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