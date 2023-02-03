import { CONFIG } from "../../../Config/host";
import { returnToken } from "../../../Token/ReturnToken";

export async function GetDenouncePublications(pag?: number) {
  const headers = {
    "content-type": "application/json",
    Authorization: "Bearer " + (await returnToken()),
  };

  const requestBody = {
    query: `query FindAllPublicationDenounce($skip: Float) {
        findAllPublicationDenounce(Skip: $skip) {
          idPublication
          foto
          user1 {
            fullName
            userName
            foto
            addressEmail
          }
          user2 {
            fullName
            addressEmail
            userName
            foto
          }
        }
      }`,
    variables: {
      skip: pag ?? 0,
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
