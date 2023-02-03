import { CONFIG } from "../../../Config/host";
import { publicationFormat } from "../../../interfaces/publicationFormat";
import { returnToken } from "../../../Token/ReturnToken";
import { useGlobalContext } from "../../../../app/Context/store";

export async function CountLike(
  idPublication:number
) {
  
  const headers = {
    "content-type": "application/json",
    Authorization: "Bearer " + await returnToken(),
  };

  const requestBody = {
    query: `query Query($countLike: CreateLikeInput!) {
        countLike(countLike: $countLike)
      }`,
    variables: {
        countLike: {
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
