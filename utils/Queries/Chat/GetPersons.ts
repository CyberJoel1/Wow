import { CONFIG } from "../../Config/host";
import { returnToken } from "../../Token/ReturnToken";


export async function GetPersons(email:string) {
    const headers = {
      "content-type": "application/json",
      Authorization: "Bearer " + (await returnToken()),
    };
  
    const requestBody = {
      "email":email
  };
  
    const options = {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers,
    };
  
    const response = await (
      await fetch(CONFIG.host + "/api/chats", options)
    ).json();
  
    return response;
  }
  