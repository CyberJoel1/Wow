import Swal from "sweetalert2";
import { QueryPublication } from "../Queries/Publication/PublicationsQueries";
import { PublicationQueries } from "../Queries/User/PublicationQueries";

export class DenouncePublications {
  public static async denounceComment(idPublication: number, userName: string) {
    let resultado: boolean = false;
    const { value: file } = await Swal.fire({
      title: "Sube la evidencia",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Sube tu evidencia",
      },
      confirmButtonText: "Si, ¡presentar denuncia!",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
      cancelButtonColor: "rgba(255, 0, 0, 0.70)",
      confirmButtonColor: "rgba(0, 151, 255, 0.70)",
      background: "rgba(236, 236, 239, 0.47)",
      color: "black",
    });
    const { value: comment } = await Swal.fire({
      title: 'Ingresa tu commentario',
      input: 'text',
      showCancelButton: true,
    })
    if (file) {
      let arrayFiles: any = [file];

     await QueryPublication.denouncePublications(arrayFiles, idPublication, userName,comment);
      /*
      const reader = new FileReader();
      reader.onload = (e: any) => {
        Swal.fire({
          title: "Your uploaded picture",
          imageAlt: "The uploaded picture",
          imageUrl: e.target.result,
        });
        console.log(e.target.result);
      };
      reader.readAsDataURL(file);*/
      resultado = true;
    }
    return resultado;
  }

  public static createDenouncePublication() {
    Swal.fire("Denuncia creada");
  }
}
