
import { CONFIG } from "../../../Config/host";
import { loginFormat } from "../../../interfaces/loginFormat";
import { returnToken } from "../../../Token/ReturnToken";

export async function confirmRequestFriendly(idRelation:number) {
    const headers = {
        "content-type": "application/json",
        'Authorization': 'Bearer ' + await returnToken(),
    };

    const requestBody = {
        query: `mutation ConfirmRequestOne($confirmRequestOneId: Int!) {
            confirmRequestOne(id: $confirmRequestOneId) {
              idRelation
              user {
                id
              }
            }
          }`,
          variables: {
            confirmRequestOneId: idRelation,
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

    console.log("aqui por favor .........................")
    console.log(response)
    return response;
}