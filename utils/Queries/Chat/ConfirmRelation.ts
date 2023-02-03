import { CONFIG } from "../../Config/host";
import { returnToken } from "../../Token/ReturnToken";


export async function getConfirmRelationGraphql(userName: string) {
  const headers = {
    "content-type": "application/json",
    'Authorization': 'Bearer ' + await returnToken(),
  };

  const requestBody = {
    query: `query Query($user2: String!) {
        findConfirmChat(user2: $user2)
      }`,
    variables: {
        user2: userName,
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
