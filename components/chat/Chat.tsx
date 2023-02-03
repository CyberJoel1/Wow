import moment from "moment";
import React, { useEffect, useRef, useState } from "react";

import io, { Socket } from "socket.io-client";
import { useGlobalContext } from "../../app/Context/store";
import { CONFIG } from "../../utils/Config/host";
import { getToken } from "../../utils/Localstorage/ManageLocalStorage.User";
import { ChatQueries } from "../../utils/Queries/Chat/ChatQueries";
import { GetComments } from "../../utils/Queries/Chat/Getmessages";
import IndividualComment from "./IndividualComment";
import IndividualCommentExtern from "./IndividualCommentExtern";
type Props = {
  idSend: number;
  idReceived: number;
  email?: string;
  text?: string;
  fotoChat?: string;

};

const Chat = (props: Props) => {
  const { idSend, idReceived, text } =
    props;
  const { setChatDefault, chatDefault } = useGlobalContext();

  const [messages, setMessages] = useState<any>([]);
  const [messagesActual, setMessagesActual] = useState<any>([]);
  const [message, setMessage] = useState<any>();
  const user = getToken();
  const [idListen, setIdListen] = useState<number>(idSend);
  const [idReceivedOrder, setIdReceivedOrder] = useState<number>(idReceived);
  const { addressEmail, fullName, userName, foto } = user;
  const section1 = useRef(null);
  const socket = io(CONFIG.host);



  const confirmRelation = async (id: number, id2: number) => {
    const response = await ChatQueries.getRelationFriendly(id);
    console.log(JSON.stringify(response));
    if (!response) {
      return;
    }
    if (response["data"]["findConfirmChatListen"]) {

      setIdListen(id);
      setIdReceivedOrder(id2);
      console.log("id1: " + id);
      console.log("id1: " + id2);
      return;
    }
    setIdListen(id2);
    setIdReceivedOrder(id);
    console.log("id1: " + id);
    console.log("id1: " + id2);
    return;
  };
  const loadData = async (idSend: number, idReceived: number) => {
    console.log(idReceived + " " + idSend);
    const response = await GetComments(
      [idSend, idReceived].sort((a, b) => a - b)
    );
    console.log(response);
    setMessages([...response]);
    setTimeout(() => {
      //scrollToTop();

    }, 4000);
  };
  function sendMessage(idSend: string, message: any) {
    console.log(message);
    //setMessagesActual([...messagesActual, message.data]);
    setMessages([...messages, message.data]);
    socket.emit(idSend, message);
  }
  socket.on(idListen.toString(), (message: any) => {
    //messages.push(message);
    //loadDate(messages);
    console.log("llego un mensaje   ................ " + message);
    setMessages([...messages, message.data]);
  });
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop(element: any) {
    if (!isBrowser()) return;
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  }
  const scrollToBottom = (element: any) => {
    element.current?.scrollIntoView({ block: 'end' })
  }
  useEffect(() => {
    loadData(idSend, idReceived);
    confirmRelation(idSend, idReceived);

    return () => {
      socket.off(idListen.toString(), (message: any) => {
        //messages.push(message);
        //loadDate(messages);
      });
      socket.close();
    };
  }, [chatDefault]);

  const listItems = messages?.map((element: any) => {
    console.log(element);
    if (element.email != userName) {
      return (
        <IndividualCommentExtern
          foto={chatDefault.foto}
          emailAddress={element.email}
          comment={element.text}
          date_created={element.createdAt}
        />
      );
    }
    return (
      <IndividualComment
        foto={foto}
        emailAddress={element.email}
        comment={element.text}
        date_created={element.createdAt}
      />
    );
  });

  const listItems2 = messagesActual?.map((element: any) => {

    return (
      <>
        <h2>{JSON.stringify(element)}</h2>
        <IndividualCommentExtern
          foto={chatDefault.foto}
          emailAddress={element.email}
          comment={element.text}
          date_created={element.createdAt}
        />
      </>
    )
  });


  return (
    <div className="p-[15px] flex flex-col h-full">
      
      
      {scrollToBottom(section1)}
        
        <div className="grow"></div>
        
        {listItems}
        
     
      
      <div className="p-8 flex items-center">
        <textarea className="flex-auto overflow-y-auto p-4 h-16 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"

          onChange={(e: any) => {
            setMessage(e.target.value);
          }}
        />
        <button ref={section1} className="bg-blue-500 rounded-md p-4"
          onClick={(e: any) => {
            //const date_created_Final = moment(new Date()).format("DD/MM/YYYY HH:mm:ss");
            sendMessage("events", {
              data: {
                idUsers: [idSend, idReceived].sort((a, b) => a - b),
                email: userName,
                text: message,
                createdAt: new Date(),
              },
              idSend: idReceivedOrder.toString(),
            });
            //setMessages([...messages, { data: { idUsers: [idSend, idReceived].sort((a, b) => a - b), email: '', text: message }, idSend: idSend.toString() }])
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
