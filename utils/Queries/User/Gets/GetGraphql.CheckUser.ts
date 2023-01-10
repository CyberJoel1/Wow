import { CONFIG } from "../../../Config/host";
import { loginFormat } from "../../../interfaces/loginFormat";

import { returnToken } from "../../../Token/ReturnToken";


export async function getCheckUser() {
        const headers = {
            "content-type": "application/json",
            'Authorization': 'Bearer ' + await returnToken(),
        };

        const requestBody = {
            query: `query Query {
                checkUser
              }`
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
