"use client";
import { Button, Checkbox, Flowbite, Label, TextInput } from "flowbite-react";
import Link from 'next/link';
import { useState } from "react";
import { loginFormat } from "../../utils/interfaces/loginFormat";
import { useRouter } from 'next/navigation';
import { QueryLogin } from "../../utils/Queries/User/LoginQueries";
import { useGlobalContext } from '../../app/Context/store';
import { setToken } from "../../utils/Localstorage/ManageLocalStorage.User";
import React from "react";


type Props = {}


const FormLogin = (props: Props) => {
    const [data, setData] = useState({ email: '', password: '' });
    const { user, setUser } = useGlobalContext();
    const [activateValidate, setActivateValidate] = useState<any>({
        validate1: false, validate2: false
    });

    const router = useRouter();
    const getLogin = async (data: loginFormat, router: any) => {
        const user = await QueryLogin.LoginEmail(data, router);
        console.log("Informacion del usuario ...............")
        const { foto, userName, fullName, addressEmail } = user['data']['login']['user'];
        setToken({ foto: foto || null, userName: userName, fullName: fullName, addressEmail: addressEmail });
        //Context
        //setUser({foto:foto||null,userName:userName, fullName:fullName, addressEmail:addressEmail});
    };

    const getLoginAdmin = async (data: loginFormat, router: any) => {
        const user = await QueryLogin.LoginEmailAdmin(data, router);

        console.log("Informacion del usuario ...............")
        console.log(user);
        const { foto, userName, fullName, addressEmail } = user['data']['loginAdmin']['user'];
        setToken({ foto: foto || null, userName: userName, fullName: fullName, addressEmail: addressEmail });
        //Context
        //setUser({foto:foto||null,userName:userName, fullName:fullName, addressEmail:addressEmail});
    };
    return (

        <>

            <h2 className='text-xl pb-5 pt-7 '>BIENVENIDO A WAROOM</h2>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Usuario"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="name@waroom.com"
                        required={true}
                        shadow={true}
                        value={data?.email}
                        onChange={(e) => {
                            setData({ ...data, email: e.target.value })
                        }}
                        color={activateValidate.validate1?"failure":undefined}
                        helperText={activateValidate.validate1?<React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment>:undefined}
                        onBlur={(e:any) => { 
                            if(e.target.value === '' || e.target.value === null){
                                setActivateValidate({...activateValidate,validate1:true});
                            }else{
                                setActivateValidate({...activateValidate,validate1:false});
                            }
                        }}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        required={true}
                        shadow={true}
                        value={data?.password}
                        onChange={(e) => {
                            setData({ ...data, password: e.target.value })
                        }}
                        color={activateValidate.validate2?"failure":undefined}
                        helperText={activateValidate.validate2?<React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment>:undefined}
                        onBlur={(e:any) => { 
                            if(e.target.value === '' || e.target.value === null){
                                setActivateValidate({...activateValidate,validate2:true});
                            }else{
                                setActivateValidate({...activateValidate,validate2:false});
                            }
                        }}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Recordarme
                    </Label>
                </div>

                <div>

                    <Button onClick={(event) => {
                        event.preventDefault();
                        getLogin({
                            email: data?.email
                            , password: data?.password,

                        }, router);
                    }} >Iniciar sesion</Button>

                </div>

                <div>

                    <Button onClick={(event) => {
                        event.preventDefault();
                        getLoginAdmin({
                            email: data?.email
                            , password: data?.password,

                        }, router);
                    }} >Sección de administrador</Button>

                </div>

            </form>
            <div className='pt-2'>
                <p className='text-sm inline-block'>No tienes una cuenta?</p>
                <Link href='/register' className='hover:text-blue-600'>
                    <p className='text-sm inline-block pl-2'>Registrate</p>
                </Link>
            </div>

        </>
    )
}

export default FormLogin