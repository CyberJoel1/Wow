import Swal from "sweetalert2";
import { QueryPublication } from "../Queries/Publication/PublicationsQueries";

export class DeletePublications {
  public static async deletePublication(idPublication: number,userName:string) {
    let resultado: boolean= false;
    Swal.fire({
      title: '¿Estás seguro/a de borrar la publicación?',
      text: "¡No podrás revertir esto!",
      icon: "error",
      showCancelButton: true,
      cancelButtonColor: 'rgba(255, 0, 0, 0.70)',
      confirmButtonColor: 'rgba(0, 151, 255, 0.70)',
      background:'rgba(236, 236, 239, 0.47)',
      color:'black',
      confirmButtonText: 'Si, ¡borrar publicación!',
      cancelButtonText:'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        resultado=true;
        await QueryPublication.deletePublication(idPublication);
        Swal.fire(
          '¡Borrada!',
          'Su publicación ha sido eliminada.',
          'success',
        )
      }
    })
      
     /* if (email) {
        Swal.fire({text:`El comentario ha sido cambiado a: ${email}`})
      }*/

      return resultado;

  }
  public static messageDeletePublication(){
    Swal.fire(
      '¡Borrada!',
      'Su publicación ha sido eliminada.',
      'success',
      
    )
  }
}
