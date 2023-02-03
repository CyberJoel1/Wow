import { Avatar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../app/Context/store";
import { QueryLogin } from "../../utils/Queries/User/LoginQueries";

type Props = {
  message: string;
  email: string;
  idUsersBar: any;
};

const BarChat = (props: Props) => {
  const { message, email, idUsersBar } = props;
  const [foto, setFoto] = useState<any>();
  const { setChatDefault } = useGlobalContext();
  const getDataProfile = async (addressEmail: string) => {
    const response: any = await QueryLogin.getDataProfile(addressEmail);
    if (response != null) {
      setFoto(response["data"]["getDataProfile"]["foto"]);
    }
  };

  const setToGlobal = () => {
    setChatDefault({ addressEmail: email, foto: foto, idUsers: idUsersBar });
  };
  useEffect(() => {
    getDataProfile(email);
    return () => {};
  }, []);

  return (
    <div
      className=" bg-slate-200 m-2 hover:bg-blue-300 p-4 cursor-pointer rounded-md flex flex-row break-all"
      onClick={(e: any) => {
        e.preventDefault();
        setToGlobal();
      }}
    >
      <div className="">
        <Avatar rounded={true} img={foto || "perfil.png"} />
      </div>
      <div className="p-2">
        <p className="font-bodyFont break-all">Amigo: {email} </p>

        <p className="font-sans">Ultimo mensaje: {message}</p>
      </div>
    </div>
  );
};

export default BarChat;
