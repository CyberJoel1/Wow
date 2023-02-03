import React, { useEffect } from 'react'
import IndividualComment from './IndividualComment'

type Props = {
  agregarComment:any,
  setAgregarComment:any,
  userName: string,
  foto: any
}

const NewComment = (props: Props) => {
  const {agregarComment,foto,userName,setAgregarComment} = props;
  useEffect(() => {
    
  
    
  }, [agregarComment])
  
  const listPublications = agregarComment?.map((element:string) => {

    return (
      <>
         <IndividualComment foto={foto} userName={userName} comment={element} date_created={undefined} idComment={undefined} reRender={undefined} setRerender={undefined}/>
        </>
      )
  });

  return (
    <div>
        {!(listPublications.length>1) && listPublications}

    </div>
  )
}

export default NewComment