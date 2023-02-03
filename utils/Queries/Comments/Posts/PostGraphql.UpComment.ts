import { CONFIG } from "../../../Config/host";
import { registerComments } from "../../../interfaces/registerComment";
import { returnToken } from "../../../Token/ReturnToken";

export async function UpdateComent(
    id: number,comment:string
  ) {
    
    const headers = {
      "content-type": "application/json",
      Authorization: "Bearer " + await returnToken(),
    };
  
    const requestBody = {
      query: `mutation Mutation($updateCommentInput: UpdateCommentInput!) {
        updateComment(updateCommentInput: $updateCommentInput) {
          confirmMessage
        }
      }`,
      variables: {
        updateCommentInput: {
            id: id,
            comment: comment,
        },
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
  