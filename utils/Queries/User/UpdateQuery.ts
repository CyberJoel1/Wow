import { updateFormat } from "../../interfaces/updateFormat";
import { ErrorNotification } from "../../SweetLibrary/ErrorNotification";
import { NotificationSuccess } from "../../SweetLibrary/SuccessNotification";
import { returnToken } from "../../Token/ReturnToken";
import { validationDataEmpty } from "../../Validations/ValidationDataEmpty";
import { postFile } from "../Publication/Posts/PostFile";
import { checkRequestFriendly } from "./Gets/checkRequestFriendly";
import { confirmRequestFriendly } from "./Gets/confirmRequestFriendly";
import { deleteFriendly } from "./Posts/DeleteFriendly";
import { postGraphqlUpdater } from "./Posts/PostGraphqlUpdate";
import { treatedDenounceFormat } from '../../interfaces/treatedDenounceFormat';
import { treatedDenouncePost } from "./Posts/TreatedDenounce";

export class QueryUpdater {


    public static async updateUser(data: updateFormat, repeatPassword: string) {
        let mensajeError = '';
        try {
           
            validationDataEmpty(data);
            
            if (data.password !== repeatPassword) {
                throw new Error("Por favor verifica que las contraseñas sean iguales");
            }
            let arrayBlob: any = [data.foto];
           
            let resultFilesNames = await postFile(arrayBlob);


            let response = await postGraphqlUpdater(data, resultFilesNames[0]);
    

            if (response.errors == undefined) {
                NotificationSuccess.successNotificationLogin(response.message);
                return true;
            }
            let errores = response.errors[0].extensions.response;
            mensajeError = (typeof errores.message) == 'object' ? errores.message[0] : errores.message;
        } catch (error: any) {
            mensajeError = error.message;
        }
    
        ErrorNotification.errorNotificationLogin(mensajeError);
    }

    public static async deleteFriendlyUser(profile:string) {
        let mensajeError = '';
        try {
           console.log("id aborrar ....................."+profile)
            let response = await deleteFriendly(profile);
    

            if (response.errors == undefined) {
                NotificationSuccess.successNotificationLogin(response.message);
                return true;
            }
            let errores = response.errors[0].extensions.response;
            mensajeError = (typeof errores.message) == 'object' ? errores.message[0] : errores.message;
        } catch (error: any) {
            mensajeError = error.message;
        }
    
        ErrorNotification.errorNotificationLogin(mensajeError);
    }

    public static async updateConfirmRequest(idRelation:number) {
        let mensajeError = '';
        try {
           
            let response = await confirmRequestFriendly(idRelation);
    

            if (response.errors == undefined) {
                return true;
            }
            let errores = response.errors[0].extensions.response;
            mensajeError = (typeof errores.message) == 'object' ? errores.message[0] : errores.message;
        } catch (error: any) {
            mensajeError = error.message;
        }
    
        ErrorNotification.errorNotificationLogin(mensajeError);
    }

    public static async treatedDenounceUpdate(treated:treatedDenounceFormat) {
        let mensajeError = '';
        try {
           
            let response = await treatedDenouncePost(treated);
    
            console.log(response);
            if (response.errors == undefined) {
                return true;
            }
            let errores = response.errors[0].extensions.response;
            mensajeError = (typeof errores.message) == 'object' ? errores.message[0] : errores.message;
        } catch (error: any) {
            mensajeError = error.message;
        }
    
        ErrorNotification.errorNotificationLogin(mensajeError);
    }
}