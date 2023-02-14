import { DocumentTextIcon } from '@heroicons/react/24/solid'
import { Card, Spinner } from 'flowbite-react'
import Link from 'next/link'
import React, { useEffect, useState, useTransition } from 'react'
import { useGlobalContext } from '../../../../app/Context/store'
import { QueryLogin } from '../../../../utils/Queries/User/LoginQueries'
import RequestRowFriend from '../RequestRowFriend'
import RowFriend from '../RowFriend'


type Props = {
  profile: string;
}

const RequestProfile = (props: Props) => {
  const { equalUser, setIsEqualUser, fotoUser, setFotoUser } = useGlobalContext();
  const { profile } = props;
  const [requestList, setRequestList] = useState<any>();
  const [renderReview, setRenderReview] = useState<boolean>(true);

  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;
  const getRequests = async () => {
    const request = await QueryLogin.getCheckRequestFriend(profile);
    if (!request) {
      setRequestList([]);
      return;
    }
    console.log("Informacion del usuario ...............")
    const requestListas = request['data']['findAllRequestForUserName'];
    setRequestList(requestListas);

  };

  useEffect(() => {

    getRequests();
    return () => {

    }
  }, [renderReview])

  const listPublications = requestList?.map((element: any) => {
    const { fullName, addressEmail, id, userName } = element['user'];
    const elementFoto = element['user']['foto'] == null ? '/foto1.jpg' : element['user']['foto'];
    let splitFullName = fullName.split(' ');
    let fullNameRes = splitFullName[0] + ' ' + splitFullName[2];
    const idRelation = element['idRelation'];
    return (

      <li className="py-3 sm:py-4">
        <RequestRowFriend fullName={fullNameRes} email={addressEmail} idRelation={idRelation} foto={elementFoto}
          setRenderReview={setRenderReview} renderReview={renderReview} idReceived={id} startTransition={startTransition}
          setIsFetching={setIsFetching} userName={userName} />
      </li>
    )
  });

  return (<>
    {!equalUser && <Link href={'/social/chat'}>
    <div className='w-full h-9 flex  items-center hover:bg-blue-500 cursor-pointer hover:text-white text-blue-600 bg-blue-400'>
      <DocumentTextIcon color='text-blue-600' className='w-6 ml-8 fill-blue-600 stroke-white'></DocumentTextIcon><p className='pl-3 text-md md:text-sm lg:text-md'>Chat</p>
    </div></Link>}
    {!equalUser && <div className='w-full bg-white mt-1 drop-shadow-lg p-3'>
      <h1 className='p-5 text-center text-sm font-bodyFont'>Solicitudes pendientes</h1>

      <div className="mb-4 flex items-center justify-between">


      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {(!isMutating ? listPublications : <Spinner aria-label="Default status example" />)}
        </ul>
      </div>

    </div>}
  </>)
}

export default RequestProfile