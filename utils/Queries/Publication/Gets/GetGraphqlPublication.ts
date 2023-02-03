import { CONFIG } from "../../../Config/host";
import { publicationFormat } from "../../../interfaces/publicationFormat";
import { returnToken } from "../../../Token/ReturnToken";
import { useGlobalContext } from "../../../../app/Context/store";

export async function GetPublication(profile: string) {
  const headers = {
    "content-type": "application/json",
    Authorization: "Bearer " + (await returnToken()),
  };

  const requestBody = {
    query: `query PublicationAll($nameUser: String!) {
      publicationAll(nameUser: $nameUser) {
        banos
        habitaciones
        latitud
        longitud
        medida
        message
        photos
        tipo
        titulo,
        date_created,
        identity,
        user {
          foto
          fullName
          userName
          addressEmail
        }
      }
    }`,
    variables: {
      nameUser: profile,
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
