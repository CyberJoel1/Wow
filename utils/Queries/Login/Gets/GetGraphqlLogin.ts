import { CONFIG } from "../../../Config/host";
import { loginFormat } from "../../../interfaces/loginFormat";
import { ErrorNotification } from "../../../SweetLibrary/ErrorNotification";
import { NotificationSuccess } from "../../../SweetLibrary/SuccessNotification";
import { saveToken } from "../../../Token/SaveToken";
import { validationDataEmpty } from "../../../Validations/ValidationDataEmpty";

export async function getLogin(data: loginFormat) {
  const headers = {
    "content-type": "application/json",
  };

  const requestBody = {
    query: `query Login($loginInput: LoginInput!) {
            login(loginInput: $loginInput) {
            token
            }
        }`,
    variables: {
      loginInput: {
        addressEmail: data.email,
        password: data.password,
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
