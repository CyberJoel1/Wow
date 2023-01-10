import axios from "axios";
import { CONFIG } from "../../Config/host";
import { publicationFormat } from "../../interfaces/publicationFormat";
import { ErrorNotification } from "../../SweetLibrary/ErrorNotification";
import { NotificationSuccess } from "../../SweetLibrary/SuccessNotification";
import { returnToken } from "../../Token/ReturnToken";
import { validationDataEmpty } from "../../Validations/ValidationDataEmpty";
import { GetPublicationOne } from "./Gets/GetGraphqlOnePublication";
import { GetPublication } from "./Gets/GetGraphqlPublication";
import { postFile } from "./Posts/PostFile";
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

    public static async updatePublication(
        data: publicationFormat,
        id:number,
        arrayBlob: []
    ) {
        let mensajeError = "";
        try {

        //Validación de datos
        validationDataEmpty(data);

        //Envia Array de archivos
        let resultFilesNames = await postFile(arrayBlob);

        //Envio de publicación
        let response = await PostPublicationUpdate(data,id, resultFilesNames);

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


    public static async findAllPublicationForClient(
        profile: string
    ) {
        let mensajeError = "";
        try {
        let response = await GetPublication(profile);
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
        //ErrorNotification.errorNotificationLogin(mensajeError);

        //return mensajeError;
    }



    public static async findOnePublication(
        id: number
    ) {
        let mensajeError = "";
        try {
        let response = await GetPublicationOne(id);
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
       // ErrorNotification.errorNotificationLogin(mensajeError);

        //return mensajeError;
    }


    
   


}
