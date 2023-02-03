import axios from "axios";
import { CONFIG } from "../../Config/host";
import { filterPublicationFormat } from "../../interfaces/filterPublicationFormat";
import { publicationFormat } from "../../interfaces/publicationFormat";
import { ErrorNotification } from "../../SweetLibrary/ErrorNotification";
import { NotificationSuccess } from "../../SweetLibrary/SuccessNotification";
import { returnToken } from "../../Token/ReturnToken";
import { validationDataEmpty } from "../../Validations/ValidationDataEmpty";
import { CheckLike } from "./Gets/CheckLike";
import { CountLike } from "./Gets/CountLike";
import { countDenouncePublicationGraphql } from "./Gets/CountPublication";
import { GetDenouncePublications } from "./Gets/GetDenouncePublication";

import { GetPublicationOne } from "./Gets/GetGraphqlOnePublication";
import { GetPublication } from "./Gets/GetGraphqlPublication";
import { GetPublicationByType } from "./Gets/GetGraphqlPublicationsType";
import { GetLikePublication } from "./Gets/GetLikePublication";
import { GetRecomendationPublication } from "./Gets/GetRecomendationPublication";
import { CreateLike } from "./Posts/CreateLike";
import { DeleteLike } from "./Posts/DeleteLike";
import { denouncePublicationGraphql } from "./Posts/DenouncePublication";
import { postFile } from "./Posts/PostFile";
import { PostDeletePublication } from "./Posts/PostGraphqlDeletePublication";
import { PostPublication } from "./Posts/PostGraphqlPublication";
import { PostPublicationUpdate } from "./Posts/PostGraphqlUpdatePublication";

export class QueryPublication {
  public static async registerPublication(
    data: publicationFormat,
    arrayBlob: []
  ) {
    let mensajeError = "";
    try {
      //Validación de datos
      validationDataEmpty(data);

      //Envia Array de archivos
      let resultFilesNames = await postFile(arrayBlob);

      //Envio de publicación
      let response = await PostPublication(data, resultFilesNames);

      if (response.errors == undefined) {
        NotificationSuccess.successNotificationLogin(
          "Se ha registrado correctamente"
        );
        return;
      }
      let errores = response.errors[0].extensions.response;
      mensajeError =
        typeof errores.message == "object"
          ? errores.message[0]
          : errores.message;
    } catch (error: any) {
      mensajeError = error.message;
    }
    ErrorNotification.errorNotificationLogin(mensajeError);

    return mensajeError;
  }

  public static async denouncePublications(
    arrayBlob: [],
    idComment:number,
    userName:string,
    comment:string
) {
    let mensajeError = "";
    try {
              //Envia Array de archivos
  let resultFilesNames = await postFile(arrayBlob);
    let response = await denouncePublicationGraphql(resultFilesNames[0],idComment,userName,comment);
    console.log(response)
    if (response.errors == undefined) {
        return response;
    }
    let errores = response.errors[0].extensions.response;
    mensajeError =
        typeof errores.message == "object"
        ? errores.message[0]
        : errores.message;
    } catch (error: any) {
    mensajeError = error.message;
    }
    ErrorNotification.errorNotificationLogin(mensajeError);

    //return mensajeError;
}
  
  public static async updatePublication(
    data: publicationFormat,
    id: number,
    arrayBlob: []
  ) {
    let mensajeError = "";
    try {
      //Validación de datos
      validationDataEmpty(data);

      //Envia Array de archivos
      let resultFilesNames = await postFile(arrayBlob);

      //Envio de publicación
      let response = await PostPublicationUpdate(data, id, resultFilesNames);

      if (response.errors == undefined) {
        NotificationSuccess.successNotificationLogin(
          "Se ha registrado correctamente"
        );
        return;
      }
      let errores = response.errors[0].extensions.response;
      mensajeError =
        typeof errores.message == "object"
          ? errores.message[0]
          : errores.message;
    } catch (error: any) {
      mensajeError = error.message;
    }
    ErrorNotification.errorNotificationLogin(mensajeError);

    return mensajeError;
  }

  public static async findAllPublicationForClient(profile: string) {
    let mensajeError = "";
    try {
      let response = await GetPublication(profile);
      console.log(response);
      if (response.errors == undefined) {
        return response;
      }
      let errores = response.errors[0].extensions.response;
      mensajeError =
        typeof errores.message == "object"
          ? errores.message[0]
          : errores.message;
    } catch (error: any) {
      mensajeError = error.message;
    }
    //ErrorNotification.errorNotificationLogin(mensajeError);

    //return mensajeError;
  }

  public static async findAllPublicationByType(
    typeProperty: string,
    filter: filterPublicationFormat
  ) {
    let mensajeError = "";
    try {
      let response = await GetPublicationByType(typeProperty, filter);
      console.log("tipo 2 .....................................");
      console.log(response);
      if (response.errors == undefined) {
        return response;
      }
      let errores = response.errors[0].extensions.response;
      mensajeError =
        typeof errores.message == "object"
          ? errores.message[0]
          : errores.message;
    } catch (error: any) {
      mensajeError = error.message;
    }
    //ErrorNotification.errorNotificationLogin(mensajeError);

    //return mensajeError;
  }

  public static async findAllPublicationByLike(profile: string) {
    let mensajeError = "";
    try {
      let response = await GetLikePublication(profile);

      console.log(response);
      if (response.errors == undefined) {
        return response;
      }
      let errores = response.errors[0].extensions.response;
      mensajeError =
        typeof errores.message == "object"
          ? errores.message[0]
          : errores.message;
    } catch (error: any) {
      mensajeError = error.message;
    }
    //ErrorNotification.errorNotificationLogin(mensajeError);

    //return mensajeError;
  }

  public static async findAllPublicationByRecomendation() {
    let mensajeError = "";
    try {
      let response = await GetRecomendationPublication();

      console.log(response);
      if (response.errors == undefined) {
        return response;
      }
      let errores = response.errors[0].extensions.response;
      mensajeError =
        typeof errores.message == "object"
          ? errores.message[0]
          : errores.message;
    } catch (error: any) {
      mensajeError = error.message;
    }
    //ErrorNotification.errorNotificationLogin(mensajeError);

    //return mensajeError;
  }

  public static async deletePublication(id:number) {
    let mensajeError = "";
    try {
      let response = await PostDeletePublication(id);

      console.log(response);
      if (response.errors == undefined) {
        return response;
      }
      let errores = response.errors[0].extensions.response;
      mensajeError =
        typeof errores.message == "object"
          ? errores.message[0]
          : errores.message;
    } catch (error: any) {
      mensajeError = error.message;
    }
    //ErrorNotification.errorNotificationLogin(mensajeError);

    //return mensajeError;
  }

  public static async findOnePublication(id: number) {
    let mensajeError = "";
    try {
      let response = await GetPublicationOne(id);
      console.log(response);
      if (response.errors == undefined) {
        return response;
      }
      let errores = response.errors[0].extensions.response;
      mensajeError =
        typeof errores.message == "object"
          ? errores.message[0]
          : errores.message;
    } catch (error: any) {
      mensajeError = error.message;
    }
    // ErrorNotification.errorNotificationLogin(mensajeError);

    //return mensajeError;
  }

  public static async publicationCreateLike(id: number) {
    let mensajeError = "";
    try {
      let response = await CreateLike(id);
      console.log(response);
      if (response.errors == undefined) {
        return response;
      }
      let errores = response.errors[0].extensions.response;
      mensajeError =
        typeof errores.message == "object"
          ? errores.message[0]
          : errores.message;
    } catch (error: any) {
      mensajeError = error.message;
    }
    // ErrorNotification.errorNotificationLogin(mensajeError);

    //return mensajeError;
  }

  public static async publicationDeleteLike(id: number) {
    let mensajeError = "";
    try {
      let response = await DeleteLike(id);
      console.log(response);
      if (response.errors == undefined) {
        return response;
      }
      let errores = response.errors[0].extensions.response;
      mensajeError =
        typeof errores.message == "object"
          ? errores.message[0]
          : errores.message;
    } catch (error: any) {
      mensajeError = error.message;
    }
    // ErrorNotification.errorNotificationLogin(mensajeError);

    //return mensajeError;
  }

  public static async publicationCheckLike(id: number) {
    let mensajeError = "";
    try {
      let response = await CheckLike(id);
      console.log(response);
      if (response.errors == undefined) {
        return response;
      }
      let errores = response.errors[0].extensions.response;
      mensajeError =
        typeof errores.message == "object"
          ? errores.message[0]
          : errores.message;
    } catch (error: any) {
      mensajeError = error.message;
    }
    // ErrorNotification.errorNotificationLogin(mensajeError);

    //return mensajeError;
  }

  public static async publicationCountLike(id: number) {
    let mensajeError = "";
    try {
      let response = await CountLike(id);
      console.log(response);
      if (response.errors == undefined) {
        return response;
      }
      let errores = response.errors[0].extensions.response;
      mensajeError =
        typeof errores.message == "object"
          ? errores.message[0]
          : errores.message;
    } catch (error: any) {
      mensajeError = error.message;
    }
    // ErrorNotification.errorNotificationLogin(mensajeError);

    //return mensajeError;
  }

  public static async publicationCountDenounce() {
    let mensajeError = "";
    try {
      let response = await countDenouncePublicationGraphql();
      console.log(response);
      if (response.errors == undefined) {
        return response;
      }
      let errores = response.errors[0].extensions.response;
      mensajeError =
        typeof errores.message == "object"
          ? errores.message[0]
          : errores.message;
    } catch (error: any) {
      mensajeError = error.message;
    }
    // ErrorNotification.errorNotificationLogin(mensajeError);

    //return mensajeError;
  }

  public static async publicationGetDenounce(pag?: number) {
    let mensajeError = "";
    try {
      let response = await GetDenouncePublications(pag);
      console.log(response);
      if (response.errors == undefined) {
        return response;
      }
      let errores = response.errors[0].extensions.response;
      mensajeError =
        typeof errores.message == "object"
          ? errores.message[0]
          : errores.message;
    } catch (error: any) {
      mensajeError = error.message;
    }
    // ErrorNotification.errorNotificationLogin(mensajeError);

    //return mensajeError;
  }
}
