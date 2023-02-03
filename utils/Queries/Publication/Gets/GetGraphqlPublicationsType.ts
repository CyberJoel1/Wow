import { CONFIG } from "../../../Config/host";
import { publicationFormat } from "../../../interfaces/publicationFormat";
import { returnToken } from "../../../Token/ReturnToken";
import { useGlobalContext } from "../../../../app/Context/store";
import { filterPublicationFormat } from "../../../interfaces/filterPublicationFormat";

export async function GetPublicationByType(typeProperty: string,filter:filterPublicationFormat) {
  const headers = {
    "content-type": "application/json",
    Authorization: "Bearer " + (await returnToken()),
  };
  let rest:any ={  };
  (Object.keys(filter) as (keyof typeof filter)[]).forEach((key, index) => {
    if(filter[key] !=null){
      rest[key]=filter[key];
    }
      
    });
  console.log("Filtros lanzados ...................")
  console.log(rest);
  const requestBody = {
    query: `query PublicationAllByType($typeProperty: String!, $filter: FilterPublicationInput) {
      publicationAllByType(typeProperty: $typeProperty, filter: $filter) {
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
        typeProperty: typeProperty,
        filter: {...rest
        }
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
