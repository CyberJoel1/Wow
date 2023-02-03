import { CONFIG } from "../../Config/host";
import { returnToken } from "../../Token/ReturnToken";


export async function GetComments(idUsers:number[]) {
    const headers = {
      "content-type": "application/json",
      Authorization: "Bearer " + (await returnToken()),
    };
  
    const requestBody = {
        "idUsers":idUsers
    };
  
    const options = {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers,
    };
  
    const response = await (
      await fetch(CONFIG.host + "/api/chat", options)
    ).json();
  
    return response;
  }
  