import { CONFIG } from "../../Config/host";
import { registerFormat } from "../../interfaces/registerFormat";
import { ErrorNotification } from "../../SweetLibrary/ErrorNotification";
import { NotificationSuccess } from "../../SweetLibrary/SuccessNotification";
import { validationDataEmpty } from '../../Validations/ValidationDataEmpty';
import { postGraphqlRegister } from "./Posts/PostGrahqlRegister";
import { registerFriendly } from '../../interfaces/registerFriendly';
import { registerFriendlyPersons } from "./Posts/RegisterFriendly";

export class QueryRegister {


    public static async registerUser(data: registerFormat, router: any, repeatPassword: string) {
        let mensajeError = '';
        try {
           
            validationDataEmpty(data);

            if (data.password !== repeatPassword) {
                throw new Error("Por favor verifica que las contraseñas sean iguales");
            }
            let response = await postGraphqlRegister(data);
    
            if (response.errors == undefined) {
                NotificationSuccess.successNotificationLogin("Se ha registrado correctamente");
                router.push('/login');
                return;
            }
            let errores = response.errors[0].extensions.response;
            mensajeError = (typeof errores.message) == 'object' ? errores.message[0] : errores.message;
        } catch (error: any) {
            mensajeError = error.message;
        }
    
        ErrorNotification.errorNotificationLogin(mensajeError);
    }

    public static async registerFriendly(data: registerFriendly) {
        let mensajeError = '';
        try {
           
            

            let response = await registerFriendlyPersons(data);
    
            if (response.errors == undefined) {
                return response;
            }
            let errores = response.errors[0].extensions.response;
            mensajeError = (typeof errores.message) == 'object' ? errores.message[0] : errores.message;
        } catch (error: any) {
            mensajeError = error.message;
        }
    
        ErrorNotification.errorNotificationLogin(mensajeError);
    }
}