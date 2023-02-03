import { CONFIG } from "../../../Config/host";
import { publicationFormat } from "../../../interfaces/publicationFormat";
import { returnToken } from "../../../Token/ReturnToken";
import { useGlobalContext } from "../../../../app/Context/store";

export async function CreateLike(
  idPublication:number
) {
  
  const headers = {
    "content-type": "application/json",
    Authorization: "Bearer " + await returnToken(),
  };

  const requestBody = {
    query: `mutation CreateLike($createLikeInput: CreateLikeInput!) {
        createLike(createLikeInput: $createLikeInput)
      }`,
    variables: {
        createLikeInput: {
            idPublication: idPublication
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
