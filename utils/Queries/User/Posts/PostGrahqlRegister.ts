import { CONFIG } from "../../../Config/host";
import { registerFormat } from "../../../interfaces/registerFormat";

export async function postGraphqlRegister(data: registerFormat){
    const headers = {
        'content-type': 'application/json',
    }
    const requestBody = {
        query: `mutation Mutation($createUserInput: CreateUserInput!) {
        usercreate(createUserInput: $createUserInput) {
          userName
        }
      }`,
        variables: {
            createUserInput: {
                fullName: data.fullName,
                identification: data.identification,
                password: data.password,
                userName: data.userName,
                dateBirth: data.dateBirth,
                addressEmail: data.addressEmail
                
            }
        }

    };

    const options = {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers
    };

    const response = await (await fetch(CONFIG.host+'/graphql', options)).json();
    return response;
}