import { CONFIG } from "../../../Config/host";
import { publicationFormat } from "../../../interfaces/publicationFormat";
import { returnToken } from "../../../Token/ReturnToken";
import { useGlobalContext } from "../../../../app/Context/store";
import { filterPublicationFormat } from "../../../interfaces/filterPublicationFormat";

export async function GetRecomendationPublication() {
  const headers = {
    "content-type": "application/json",
    Authorization: "Bearer " + (await returnToken()),
  };

  const requestBody = {
    query: `query PublicationRecomendation {
        publicationRecomendation {
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

  return response;
}
