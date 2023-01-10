import { CONFIG } from '../../../Config/host';
import { updateFormat } from '../../../interfaces/updateFormat';
import { returnToken } from '../../../Token/ReturnToken';
export async function postGraphqlUpdater(data: updateFormat, foto:string){
   
    console.log("La informacion ha actualizar ....................")
    console.log(data)
    console.log(await returnToken());
    const headers = {
        "content-type": "application/json",
        Authorization: "Bearer " + await returnToken(),
      };
    
      const requestBody = {
        query: `mutation UpdateToUser($updateUser: UpdateUserInput!) {
          updateToUser(updateUser: $updateUser) {
            message
          }
        }`,
        variables: {
            updateUser: {
                foto: foto,
                fullName: data.fullName,
                identification: data.identification,
                password: data.password,
                userName: data.userName,
                dateBirth: data.dateBirth,
                addressEmail: data.addressEmail
            
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