"use client";

import { useEffect, useState } from "react";
import BarChat from "../../../../components/chat/BarChat";
import Chat from "../../../../components/chat/Chat";
import { getToken } from "../../../../utils/Localstorage/ManageLocalStorage.User";
import { GetPersons } from "../../../../utils/Queries/Chat/GetPersons";
import { useGlobalContext } from "../../../Context/store";
import { cleanDefaultChatStorage, getDefafultChatStorage, storageDefaultChat } from '../../../../utils/Localstorage/LocalStorage.defaultChat';
import { globalUser } from "../../../../utils/interfaces/globalUser";



const page = () => {

  const [chats, setChats] = useState<any>([]);
  const [fotoUserReceived, setFotoUserReceived] = useState<string>();
  const [emailUserReceived, setEmailReceived] = useState<string>();
  const {setChatDefault,
    chatDefault: { idUsers },
  } = useGlobalContext();
  const user = getToken();
  const { addressEmail, fullName, userName, foto } = user;
  const loadData = async (num: string) => {
    const response = await GetPersons(userName);
    console.log(response);
    setChats([...response]);
  };
  const contextDefault=()=>{
    const data:storageDefaultChat | null =getDefafultChatStorage();
    console.log("data .................."+JSON.stringify(data));
    console.log(data);
    if(!data){
      return;
    }
    cleanDefaultChatStorage();
    setChatDefault({idUsers:data.idUsers,addressEmail:data.addressEmail,foto:data.foto});
  }

  useEffect(() => {
    loadData(addressEmail);
    contextDefault();
    return () => {};
  }, []);

  const listPersons = chats.map((element: any) => {
    let emailPush =
      element.email == userName ? element.emailsen : element.email;

    console.log("aqui "+element.email+" "+element.emailsen+" "+userName);
    
    return (
      <>
        <BarChat
          message={element.text}
          email={emailPush}
          idUsersBar={element.idUsers}
        />
      </>
    );
  });
  return (
    <div className="flex flex-row text-sm md:text-lg">
      <div className=" bg-blue-50 m-2 overflow-auto max-h-screen min-w-[150px] w-[40%] md:w-[30%]">
        
        {listPersons}
       
      </div>
      <div className=" flex-auto overflow-auto bg-blue-50 md:w-[70%] w-[60%] max-h-[100vh] min-h-[calc(100vh-0.7rem)]">
        {idUsers && <Chat idSend={idUsers[0]} idReceived={idUsers[1]}/>}
      </div>
    </div>
  );
};

export default page;
