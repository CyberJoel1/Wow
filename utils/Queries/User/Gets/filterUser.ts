import { CONFIG } from "../../../Config/host";
import { loginFormat } from "../../../interfaces/loginFormat";

import { returnToken } from "../../../Token/ReturnToken";


export async function getfilterUser(filterUser?:string) {
        const headers = {
            "content-type": "application/json",
            'Authorization': 'Bearer ' + await returnToken(),
        };

        const requestBody = {
            query: `query MatchUser($stringUser: String!) {
                matchUser(stringUser: $stringUser) {
                  fullName
                  userName
                  id
                  foto
                  addressEmail
                }
              }`,
              variables: {
                stringUser: filterUser || '',
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
