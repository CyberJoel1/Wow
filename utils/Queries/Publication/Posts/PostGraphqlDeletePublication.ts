import { CONFIG } from "../../../Config/host";
import { publicationFormat } from "../../../interfaces/publicationFormat";
import { returnToken } from "../../../Token/ReturnToken";
import { useGlobalContext } from "../../../../app/Context/store";

export async function PostDeletePublication(
  id:number
) {
  
  const headers = {
    "content-type": "application/json",
    Authorization: "Bearer " + await returnToken(),
  };

  const requestBody = {
    query: `mutation RemovePublication($removePublicationId: Int!) {
      removePublication(id: $removePublicationId) {
        message
      }
    }`,
    variables: {
      removePublicationId:id
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
