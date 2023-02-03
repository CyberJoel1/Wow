import { CONFIG } from "../../../Config/host";
import { returnToken } from "../../../Token/ReturnToken";


export async function GetComments(id: number, fecha?: string, pag?:number) {
    const headers = {
      "content-type": "application/json",
      Authorization: "Bearer " + (await returnToken()),
    };
  
    const requestBody = {
      query: `query Allcomentary($allcomentaryId: Int!, $pag: Int, $fecha: String) {
        Allcomentary(id: $allcomentaryId, pag: $pag, fecha: $fecha) {
          user {
            foto
            fullName
            userName
          }
          comment
          date_created
          id
        }
      }`,
      variables: {
        allcomentaryId: id,
        pag: pag || 0,
        fecha: fecha || "2024-01-14T16:29:18.313"
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
  