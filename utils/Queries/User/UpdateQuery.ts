import { updateFormat } from "../../interfaces/updateFormat";
import { ErrorNotification } from "../../SweetLibrary/ErrorNotification";
import { NotificationSuccess } from "../../SweetLibrary/SuccessNotification";
import { returnToken } from "../../Token/ReturnToken";
import { validationDataEmpty } from "../../Validations/ValidationDataEmpty";
import { postFile } from "../Publication/Posts/PostFile";
import { postGraphqlUpdater } from "./Posts/PostGraphqlUpdate";

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
}