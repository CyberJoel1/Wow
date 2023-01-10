import { CONFIG } from "../../../Config/host";
import { publicationFormat } from "../../../interfaces/publicationFormat";
import { returnToken } from "../../../Token/ReturnToken";
import { useGlobalContext } from "../../../../app/Context/store";

export async function PostPublication(
  data: publicationFormat,
  resultFilesNames: any[] | undefined
) {
  
  const headers = {
    "content-type": "application/json",
    Authorization: "Bearer " + await returnToken(),
  };

  const requestBody = {
    query: `mutation CreatePublication($createPublicationInput: CreatePublicationInput!) {
              createPublication(createPublicationInput: $createPublicationInput) {
                titulo
              }
            }`,
    variables: {
      createPublicationInput: {
        titulo: data.titulo,
        medida: data.medida,
        longitud: data.longitud,
        latitud: data.latitud,
        habitaciones: data.habitaciones,
        banos: data.banos,
        message: data.mensaje,
        photos: resultFilesNames,
        tipo: data.tipo
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
