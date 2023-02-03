import { registerComments } from "../../interfaces/registerComment";
import { ErrorNotification } from "../../SweetLibrary/ErrorNotification";
import { NotificationSuccess } from "../../SweetLibrary/SuccessNotification";
import { validationDataEmpty } from "../../Validations/ValidationDataEmpty";
import { postFile } from "../Publication/Posts/PostFile";
import { GetCommentsDenounce } from "./Gets/GetDenounceComments";
import { GetComments } from "./Gets/GetsGraphql.Comments";
import { countDenounceCommentGraphql } from "./Posts/CountComment";
import { DeletePostComment } from "./Posts/DeleteComment";
import { denounceCommentGraphql } from "./Posts/DenounceComments";
import { PostComment } from "./Posts/PostGraphql.Comments";
import { UpdateComent } from "./Posts/PostGraphql.UpComment";


export class CommentsQueries{

    public static async registerComments(
        data: registerComments
    ) {
        let mensajeError = "";
        try {

        //Validación de datos
        validationDataEmpty(data);

        //Envio de publicación
        let response = await PostComment(data);
        console.log("Solucion aqui esta Joel" + JSON.stringify(response))
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


    public static async findAllComments(
        idPublication: number, fecha?:string, pag?:number
    ) {
        let mensajeError = "";
        try {
        let response = await GetComments(idPublication,fecha,pag);
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


    public static async updateComments(
        id:number, comment: string
    ) {
        let mensajeError = "";
        try {

        //Validación de datos
        if(comment===''){
            throw new Error("Verifica el comentario");
        }

        //Envio de publicación
        let response = await UpdateComent(id, comment);
        console.log("Solucion aqui esta Joel" + JSON.stringify(response))
        if (response.errors == undefined) {
            NotificationSuccess.successNotificationLogin(
            "Se ha registrado correctamente"
            );
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

        return mensajeError;
    }


    public static async denounceComments(
        arrayBlob: [],
        idComment:number,
        userName:string,
        comment:string
    ) {
        let mensajeError = "";
        try {
                  //Envia Array de archivos
      let resultFilesNames = await postFile(arrayBlob);
        let response = await denounceCommentGraphql(resultFilesNames[0],idComment,userName,comment);
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

    public static async deleteComments(
        id:number
    ) {
        let mensajeError = "";
        try {
        let response = await DeletePostComment(id);
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

    public static async countComments(    ) {
        let mensajeError = "";
        try {
        let response = await countDenounceCommentGraphql();
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

    public static async getDenounceComments( pag?:number   ) {
        let mensajeError = "";
        try {
        let response = await GetCommentsDenounce(pag);
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


    
}