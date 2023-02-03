
import { CONFIG } from "../../../Config/host";
import { loginFormat } from "../../../interfaces/loginFormat";
import { returnToken } from "../../../Token/ReturnToken";

export async function getCheckStatusFriendly(profile:string) {
    const headers = {
        "content-type": "application/json",
        'Authorization': 'Bearer ' + await returnToken(),
    };

    const requestBody = {
        query: `query Query($user2: String!) {
            findConfirmFriend(user2: $user2)
          }`,
          variables: {
            user2: profile,
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