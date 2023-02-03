import { CONFIG } from "../../../Config/host";
import { loginFormat } from "../../../interfaces/loginFormat";
import { ErrorNotification } from "../../../SweetLibrary/ErrorNotification";
import { NotificationSuccess } from "../../../SweetLibrary/SuccessNotification";
import { returnToken } from "../../../Token/ReturnToken";
import { saveToken } from "../../../Token/SaveToken";
import { validationDataEmpty } from "../../../Validations/ValidationDataEmpty";

export async function getAllFriends(profile:string) {
    const headers = {
        "content-type": "application/json",
        'Authorization': 'Bearer ' + await returnToken(),
    };

        const requestBody = {
            query: `query FindAllFriendsForUserName($userName: String!) {
                findAllFriendsForUserName(userName: $userName) {
                  userName
                  fullName
                  foto
                  id
                  addressEmail
                }
              }`,
              variables: {
                  userName: profile,
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
            console.log("Respesta .................."+response)
        return response;
}