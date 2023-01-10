import { faTruckPlane } from "@fortawesome/free-solid-svg-icons";
import { loginFormat } from "../../interfaces/loginFormat";
import { ErrorNotification } from "../../SweetLibrary/ErrorNotification";
import { NotificationSuccess } from "../../SweetLibrary/SuccessNotification";
import { saveToken } from "../../Token/SaveToken";
import { validationDataEmpty } from "../../Validations/ValidationDataEmpty";
import { getCheckUser } from "./Gets/GetGraphql.CheckUser";
import { getDataProfileGraphql } from "./Gets/GetGraphql.DataProfile";
import { getLogin } from "./Gets/GetGraphqlLogin";

export class QueryLogin {
  public static async LoginEmail(data: loginFormat, router: any) {
    let mensajeError = "";
    try {
      validationDataEmpty(data);
      const response = await getLogin(data);
      if (response.errors == undefined) {
        let login = await saveToken(response);

        if (login.success != undefined) {
          NotificationSuccess.successNotificationLogin(
            "Usuario logueado correctamente"
          );
          router.push("/social");
          return response;
        }
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
  }




  public static async checkUser(
    
) {
    let mensajeError = "";
    try {
    let response = await getCheckUser();
    
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

public static async getDataProfile(profile: string) {
  let mensajeError = '';
  try {
     
      let response = await getDataProfileGraphql(profile);
      

      if (response.errors == undefined) {
          
          return response;
      }
      let errores = response.errors[0].extensions.response;
      mensajeError = (typeof errores.message) == 'object' ? errores.message[0] : errores.message;
  } catch (error: any) {
      mensajeError = error.message;
  }
  return;
  //ErrorNotification.errorNotificationLogin(mensajeError);
}

  
}
