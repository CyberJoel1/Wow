import { CONFIG } from "../../../Config/host";
import { registerComments } from "../../../interfaces/registerComment";
import { returnToken } from "../../../Token/ReturnToken";

export async function deletePublicationDenounce(
    id:number
  ) {
    
    const headers = {
      "content-type": "application/json",
      Authorization: "Bearer " + await returnToken(),
    };
  
    const requestBody = {
      query: `mutation DeletePublicationDenounce($idDenouncePublication: Float!) {
        deletePublicationDenounce(idDenouncePublication: $idDenouncePublication)
      }`,
      variables: {
        idDenouncePublication: id
      },
    };
  
    const options = {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers,
    };
  
    const response = await (
      await fetch(CONFIG.host + "/graphql", options)
    ).json();
    
    return response;
  }
  