import { CONFIG } from "../../../Config/host";
import { publicationFormat } from "../../../interfaces/publicationFormat";
import { returnToken } from "../../../Token/ReturnToken";

export async function PostPublicationDelete(
    id:number
  ) {
/*

    const headers = {
      "content-type": "application/json",
      Authorization: "Bearer " + await returnToken(),
    };
    
  
    const requestBody = {
      query: `mutation UpdatePublication($updatePublicationInput: UpdatePublicationInput!) {
        updatePublication(updatePublicationInput: $updatePublicationInput) {
          titulo
        }
      }`,
      variables: {
        updatePublicationInput: {
          titulo: data.titulo,
          medida: data.medida,
          longitud: data.longitud,
          latitud: data.latitud,
          habitaciones: data.habitaciones,
          banos: data.banos,
          message: data.mensaje,
          photos: resultFilesNames,
          tipo: data.tipo,
          id:  id
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
    
    return response;*/
  }
  