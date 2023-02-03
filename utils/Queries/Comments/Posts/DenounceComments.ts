import { CONFIG } from "../../../Config/host";
import { registerComments } from "../../../interfaces/registerComment";
import { returnToken } from "../../../Token/ReturnToken";

export async function denounceCommentGraphql(
    foto:string,
    idComment:number,
    userName:string,
        comment:string
  ) {
    
    const headers = {
      "content-type": "application/json",
      Authorization: "Bearer " + await returnToken(),
    };
  
    const requestBody = {
      query: `mutation CreateCommentDenounce($denounceComment: DenounceComment!) {
        createCommentDenounce(denounceComment: $denounceComment)
      }`,
      variables: {
        denounceComment: {
            foto:foto,
            idComment: idComment,
            userName: userName,
            comment:comment
        }
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
  