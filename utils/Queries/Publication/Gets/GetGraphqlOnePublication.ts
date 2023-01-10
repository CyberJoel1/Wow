import { CONFIG } from "../../../Config/host";
import { publicationFormat } from "../../../interfaces/publicationFormat";
import { returnToken } from "../../../Token/ReturnToken";
import { useGlobalContext } from "../../../../app/Context/store";

export async function GetPublicationOne(id: number) {
  const headers = {
    "content-type": "application/json",
    Authorization: "Bearer " + (await returnToken()),
  };

  const requestBody = {
    query: `query PublicationOne($publicationOneId: Int!) {
        publicationOne(id: $publicationOneId) {
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
        identity
      }
    }`,
    variables: {
        publicationOneId: id,
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
