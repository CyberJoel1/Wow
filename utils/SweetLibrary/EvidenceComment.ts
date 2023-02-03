import Swal from "sweetalert2"

export class EvidenceComment{

    public static evidenceComment(){
        Swal.fire({
            title: '   ',
            text: '   ',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: '80%',
            imageHeight: 300,
            imageAlt: 'Custom image', 
            width:'50%'
          })
    }



    public static confirm(fecha:string){
        Swal.fire({
            title: `Se bloqueará al usuario hasta : ${fecha}`,
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, ¡bloquear usuario!',
            cancelButtonText:'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                '¡Bloqueado!',
                'El usuario ha sido bloqueado con éxito',
                'success'
              )
            }
          })
    }


    public static cancelRequest(){
        Swal.fire({
            title: '¿Estás seguro/a?',
            text: "¡No podrás revertir esto!",
            icon: "error",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, ¡cancelar solicitud!',
            cancelButtonText:'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                '¡Borrada!',
                'Su solicitud ha sido eliminada.',
                'success',
              )
            }
          })
    }


}