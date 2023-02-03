import { CONFIG } from "../../Config/host";
import { returnToken } from "../../Token/ReturnToken";


export async function getRelationFriendlyGraphql(id: number) {
  const headers = {
    "content-type": "application/json",
    'Authorization': 'Bearer ' + await returnToken(),
  };

  const requestBody = {
    query: `query Query($idRelation: Float!) {
        findConfirmChatListen(idRelation: $idRelation)
      }`,
    variables: {
        idRelation: id,
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
