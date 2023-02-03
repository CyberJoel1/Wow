import Swal from "sweetalert2";
import { CommentsQueries } from '../Queries/Comments/CommentsQueries';

export class DeleteComments {
  public static async deleteComment(idComment: number,userName:string) {
    let resultado: boolean= false;
    Swal.fire({
      title: '¿Estás seguro/a de borrar el comentario?',
      text: "¡No podrás revertir esto!",
      icon: "error",
      showCancelButton: true,
      cancelButtonColor: 'rgba(255, 0, 0, 0.70)',
      confirmButtonColor: 'rgba(0, 151, 255, 0.70)',
      background:'rgba(236, 236, 239, 0.47)',
      color:'black',
      confirmButtonText: 'Si, ¡borrar comentario!',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        resultado=true;
        CommentsQueries.deleteComments(idComment);
        Swal.fire(
          '¡Borrada!',
          'Su comentario ha sido eliminado.',
          'success',
        )
      }
    })
      
     /* if (resultado) {
        Swal.fire({text:`El comentario ha sido cambiado a: ${email}`})
      }*/

      
      return resultado;
  }
  public static messageDeleteComment(){
    Swal.fire(
      '¡Borrada!',
      'Su comentario ha sido eliminado.',
      'success',
      
    )
  }
}
