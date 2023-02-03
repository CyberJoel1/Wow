import { CONFIG } from "../../../Config/host";
import { loginFormat } from "../../../interfaces/loginFormat";
import { ErrorNotification } from "../../../SweetLibrary/ErrorNotification";
import { NotificationSuccess } from "../../../SweetLibrary/SuccessNotification";
import { returnToken } from "../../../Token/ReturnToken";
import { saveToken } from "../../../Token/SaveToken";
import { validationDataEmpty } from "../../../Validations/ValidationDataEmpty";

export async function getDataProfileChatGraphql(addressEmail: string) {
    const headers = {
        "content-type": "application/json",
        //'Authorization': 'Bearer ' + await returnToken(),
    };

        const requestBody = {
            query: `query Query($addressEmail: String!) {
                getDataProfileChat(addressEmail: $addressEmail) {
                  foto
                  fullName
                }
              }`,
            variables: {
                addressEmail: addressEmail,
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