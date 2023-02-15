
import React, { useState } from 'react'
import SeparatorComponent from '../../../utils/SeparatorComponent';
import CommentPublication from './CommentPublication';
import ButtonsInteractive from '../particles/ButtonsInteractive';

type Props = {
  userName: string,
  idPublication: number,
  foto: any
}

const FooterPublication = (props: Props) => {
  const {userName, foto ,idPublication} = props;
  const [abrirComentario, setAbrirComentario] = useState<boolean>(false);
  return (
    <div className=''>
      <SeparatorComponent />
        <ButtonsInteractive abrirComentario={abrirComentario} setAbrirComentario={setAbrirComentario} idPublication={idPublication}/>
      <SeparatorComponent/>
      <CommentPublication userNameTo={userName} idPublication={idPublication} foto={foto || '/foto1.jpg'} abrirComentario={abrirComentario}/>

    </div>
  )
}

export default FooterPublication;
