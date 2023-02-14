import moment from "moment";
import Swal from "sweetalert2";
import { QueryUpdater } from "../Queries/User/UpdateQuery";
import { PublicationQueries } from "../Queries/User/PublicationQueries";
import { QueryPublication } from "../Queries/Publication/PublicationsQueries";

export class EvidencePublication {
  public static evidencePublication(evidencia: string) {
    Swal.fire({
      title: "   ",
      text: "   ",
      imageUrl: evidencia,
      imageWidth: "80%",
      imageHeight: 300,
      imageAlt: "Custom image",
      width: "50%",
    });
  }

  public static async confirm(fecha: string, fullName: any, userName: any): Promise<boolean> {
    const { value: text } = await Swal.fire({
      title: `Se bloqueará al usuario hasta : ${fecha}`,
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, ¡bloquear usuario!",
      cancelButtonText: "Cancelar",
    });
    if (text) {
      const resultado = await QueryUpdater.treatedDenounceUpdate({
        userName: userName,
        endBlockDate: moment(fecha, "YYYY-MM-DD").toDate(),
      });
      console.log(resultado);
      if (!resultado) {
        Swal.fire(
          "¡No Bloqueado!",
          "El usuario no ha sido bloqueado con éxito",
          "error"
        );
      } else {
        Swal.fire(
          "¡Bloqueado!",
          "El usuario ha sido bloqueado con éxito",
          "success"
        );
        return true;
      }
    }
    return false;
  }

  public static cancelRequest(id: number):boolean {
    Swal.fire({
      title: "¿Estás seguro/a?",
      text: "¡No podrás revertir esto!",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, ¡cancelar solicitud!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resultado = await QueryPublication.deletePublicationDenounceOne(
          id
        );
        if (!resultado) {
          Swal.fire(
            "¡No Borrada!",
            "Su solicitud no ha sido eliminada.",
            "error"
          );
        
        } else {
          Swal.fire("¡Borrada!", "Su solicitud ha sido eliminada.", "success");
          return true;
        }
      }
    });
    return false;
  }
}
