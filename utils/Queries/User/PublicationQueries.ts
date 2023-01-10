import { ErrorNotification } from "../../SweetLibrary/ErrorNotification";
import { NotificationSuccess } from "../../SweetLibrary/SuccessNotification";
import { getGraphqlFindProperti } from "./Gets/GetGraphql.FindProperti";

export class PublicationQueries{
    
public static async getDataPublicationUser(id: number) {
    let mensajeError = '';
    try {
       
        let response = await getGraphqlFindProperti(id);
  
  
        if (response.errors == undefined) {
           
            return response;
        }
        let errores = response.errors[0].extensions.response;
        mensajeError = (typeof errores.message) == 'object' ? errores.message[0] : errores.message;
    } catch (error: any) {
        mensajeError = error.message;
    }
  
   // ErrorNotification.errorNotificationLogin(mensajeError);
  }
}