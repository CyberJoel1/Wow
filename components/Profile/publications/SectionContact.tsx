import { Card } from 'flowbite-react'
import React, { useEffect, useState, useTransition } from 'react'
import { QueryLogin } from '../../../utils/Queries/User/LoginQueries'
import RowFriend from '../Friends/RowFriend'

type Props = {
  profile:string;
}

const SectionContact = (props: Props) => {
  const {profile} = props;
  const [requestList, setRequestList] = useState<any>();
  const [renderReview, setRenderReview] = useState<boolean>(true);
  
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;


  const getRequests = async (profile:string) => {
    console.log(profile);
    const request = await QueryLogin.getCheckAllFriends(profile);
    console.log("amigos ................... XD XD")
    console.log(request)
    if(!request){
      return;
    }
    console.log("Informacion del usuario ...............")
    console.log("amigos ................... XD XD")
    const requestListas= request['data']['findAllFriendsForUserName'];
    setRequestList(requestListas);

};

  const listPublications = requestList?.map((element:any) => {
    const {fullName,addressEmail,id, userName} = element;
    const elementFoto = element['foto'] == null?'/foto1.jpg':element['foto'];
    let splitFullName = fullName.split(' ');
    let fullNameRes= splitFullName[0]+' '+splitFullName[2];
    const idRelation = element['idRelation'];
    return (
      
        <li className="py-3 sm:py-4">
         
           <RowFriend  fullName={fullNameRes} email={addressEmail} idRelation={idRelation} foto={elementFoto}
        setRenderReview={setRenderReview} renderReview={renderReview} idReceived={id} startTransition={startTransition}
        setIsFetching={setIsFetching} userName={userName}/>
        </li>
      )
  });

  useEffect(() => {
    getRequests(profile);
  
    return () => {
      
    }
  }, [renderReview])
  
  return (
<div className="">
  <div className='w-[80%] m-auto'>
  <Card>
    <div className="mb-4 flex items-center justify-between">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
        Amigos
      </h5>

    </div>
    <div className="flow-root">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      
        {listPublications}
      </ul>
    </div>
  </Card>
</div>
</div>
  )
}

export default SectionContact