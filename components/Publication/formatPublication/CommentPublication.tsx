import React, { useEffect, useState } from 'react'
import { getToken } from '../../../utils/Localstorage/ManageLocalStorage.User'
import { CommentsQueries } from '../../../utils/Queries/Comments/CommentsQueries'
import IndividualComment from '../particles/IndividualComment'
import IndividualCommentExtern from '../particles/IndividualCommentExtern'
import InsertComment from '../particles/InsertComment'
import NewComment from '../particles/NewComment'


type Props = {
  userNameTo: string,
  idPublication: number,
  foto: any,
  abrirComentario: any
}

const CommentPublication = (props: Props) => {

  const { userNameTo, foto, idPublication, abrirComentario } = props;
  const [reRender, setRerender] = useState<boolean>(false);
  const [fecha, setFecha] = useState<string>();
  const [agregarComment, setAgregarComment] = useState<any>();
  const [comments, setComments] = useState<any>();
  const [contador, setContador] = useState<number>(0);



  const getAllComment = async (fechaOptional?: string, contadorOptional?: number) => {


    const response = await CommentsQueries.findAllComments(idPublication, fechaOptional || fecha, contadorOptional || contador);

    console.log("Respuesta del response .. comments ....." + response);
    if (!response) {
      //ErrorNotification.errorNotificationLogin("Lo lamentamos no se encontraron datos");
      return;
    }

    let comentaries = response['data']['Allcomentary'];
    let dateSave = comentaries[0]['date_created'];
    setFecha(dateSave);

    setComments(response['data']['Allcomentary']);
  };



  const getAllComment2 = async (fechaOptional?: string, contadorOptional?: number) => {


    const response = await CommentsQueries.findAllComments(idPublication);

    console.log("Respuesta del response .. comments ....." + response);
    if (!response) {
      //ErrorNotification.errorNotificationLogin("Lo lamentamos no se encontraron datos");
      return;
    }

    let comentaries = response['data']['Allcomentary'];
    let dateSave = comentaries[0]['date_created'];
    setFecha(dateSave);

    setComments(response['data']['Allcomentary']);
  };

  const updateAllComment = async () => {
    const response = await CommentsQueries.findAllComments(idPublication, fecha, contador + 5);

    console.log("Respuesta del response .. comments ....." + response);
    console.log(fecha)
    console.log(contador + 5)
    if (!response) {
      //ErrorNotification.errorNotificationLogin("Lo lamentamos no se encontraron datos");
      return;
    }
    setContador(contador + 5);
    console.log("comments ... " + JSON.stringify([...response['data']['Allcomentary'], ...comments]));
    setComments([...comments, ...response['data']['Allcomentary']]);
  };

  const accionAgregarComments = () => {
    getAllComment2();
  }

  useEffect(() => {
    if (!comments && abrirComentario) {
      getAllComment();
    }


    return () => {

    }
  }, [comments, reRender, abrirComentario])

  const listComments = comments?.map((element: any) => {
    console.log(element['comment'])
    console.log(element['user'])
    const { comment, user: { foto, userName }, date_created, id } = element;
    const user = getToken();
    if (user.userName === userName) {
      return (
        <>
          <IndividualComment foto={foto} userName={userName} comment={comment} date_created={date_created} idComment={id}
            reRender={reRender} setRerender={setRerender} />

        </>
      )
    }
    return (
      <>
        <IndividualCommentExtern foto={foto} userName={userName} comment={comment} date_created={date_created} idComment={id}/>

      </>
    )

  });

  return (
    <div className='w-full p-3 pr-7 bg-blue-50 rounded-b-lg'>
      {abrirComentario && <InsertComment userName={userNameTo} idPublication={idPublication} foto={foto}
        registerNewComments={accionAgregarComments} />}
      {/* <NewComment agregarComment={agregarComment} setAgregarComment={setAgregarComment} userName={userNameTo} foto={foto}/>   */}

      {abrirComentario && listComments}

      {abrirComentario && <button onClick={(e: any) => {
        e.preventDefault();
        updateAllComment();
      }}>Ver mas</button>}
    </div>
  )
}

export default CommentPublication