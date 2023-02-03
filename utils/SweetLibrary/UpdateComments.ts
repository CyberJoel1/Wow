import Swal from "sweetalert2";

export class UpdateComments {
  public static async updateComment(showMessage: string) {
    const { value: email } = await Swal.fire({
        title: 'Actualización',
        input: 'text',
        showCancelButton: true,
        cancelButtonColor: 'rgba(255, 0, 0, 0.70)',
        cancelButtonText:'No actualizar',
        confirmButtonColor: 'rgba(0, 151, 255, 0.70)',
        confirmButtonText:'Actualizar',
        background:'rgba(236, 236, 239, 0.47)',
        color:'black',
        
        
        
        inputValue: showMessage
      })
      /*
      if (email) {
        Swal.fire(`El comentario ha sido cambiado a: ${email}`)
      }
*/
      return email;

  }
}
