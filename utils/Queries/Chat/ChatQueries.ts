import { ErrorNotification } from "../../SweetLibrary/ErrorNotification";
import { NotificationSuccess } from "../../SweetLibrary/SuccessNotification";
import { getConfirmRelationGraphql } from "./ConfirmRelation";
import { getRelationFriendlyGraphql } from "./GetRelationFriendly";

export class ChatQueries {
  public static async getConfirmRelation(userName: string) {
    let mensajeError = "";
    try {
      let response = await getConfirmRelationGraphql(userName);

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
  }

  public static async getRelationFriendly(id: number) {
    let mensajeError = "";
    try {
      let response = await getRelationFriendlyGraphql(id);

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
  }
}
