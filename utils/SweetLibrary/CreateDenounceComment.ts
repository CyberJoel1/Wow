import Swal from "sweetalert2";
import { CommentsQueries } from "../Queries/Comments/CommentsQueries";

export class DenounceComments {
  public static async denounceComments(
    idPublication: number,
    userName: string
  ) {
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

      await CommentsQueries.denounceComments(arrayFiles, idPublication, userName,comment);
      /* const reader = new FileReader();
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
  public static createDenounceComment() {
    Swal.fire("Denuncia creada");
  }
}
