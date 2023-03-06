"use client";
import React, { useEffect } from 'react'
import { Button, Checkbox, Flowbite, Label, Select, TextInput } from "flowbite-react";
import Link from 'next/link';
import { useState } from "react";
import { registerFormat } from '../../utils/interfaces/registerFormat';
import { NotificationSuccess } from '../../utils/SweetLibrary/SuccessNotification';
import { ErrorNotification } from '../../utils/SweetLibrary/ErrorNotification';
import { useRouter } from 'next/navigation';
import { CONFIG } from '../../utils/Config/host';
import { QueryRegister } from '../../utils/Queries/User/RegisterQuery';
type Props = {}

const FormRegister = (props: Props) => {
    let initialValue = { userName: '', addressEmail: '', identification: '', fullName: '', password: '', typeUser: 'Masculino' };
    const [dataRegister, setData] = useState<registerFormat>(initialValue);
    const [nombreCompleto, setNombreCompleto] = useState<any>({ firstName: '', twoName: '', firstSurName: '', lastSurName: '' });
    const [repeatPassword, setRepeatPasswor] = useState("");
    const [activateValidate, setActivateValidate] = useState<any>({
        validate1: false, validate2: false, validate3: false
        , validate4: false, validate5: false, validate6: false, validate7: false, validate8: false, validate9: false, validate10: false, validate11: false
    });
    const [accion, setAccion] = useState(false);
    const router = useRouter();

    async function nameComplete(nombres: any): Promise<string> {
        const { firstName, twoName, firstSurName, lastSurName } = nombres;

        let returnName = firstName + " " + twoName + " " + firstSurName + " " + lastSurName;
        return returnName;
    }
    const getRegister = async (data: registerFormat, router: any, repeatPassword: string) => {
        await QueryRegister.registerUser(data, router, repeatPassword);


    };

    useEffect(() => {

    }, [])


    useEffect(() => {
        if (dataRegister !== initialValue) {
            getRegister(dataRegister, router, repeatPassword);
            setData(initialValue);
        }
    }, [accion])


    return (
        <div>
            <h2 className='text-xl text-center pb-5 pt-7 '>Formulario de registro</h2>

            {activateValidate && <form className="grid grid-flow-col-2 gap-4">
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Primer nombre"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="text"
                        placeholder="Mishell"
                        required={true}
                        shadow={true}
                        onChange={(e) => {
                            setNombreCompleto({ ...nombreCompleto, firstName: e.target.value });
                        }}
 
                        value={nombreCompleto?.firstName}
                        color={activateValidate.validate1?"failure":undefined}
                        helperText={activateValidate.validate1?<React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment>:<React.Fragment>Este campo es obligatorio!</React.Fragment>}
                        onBlur={(e:any) => { 
                            if(e.target.value === '' || e.target.value === null){
                                setActivateValidate({...activateValidate,validate1:true});
                            }else{
                                setActivateValidate({...activateValidate,validate1:false});
                            }
                        }}
                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Segundo nombre"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="text"
                        placeholder="Estefania"
                        required={true}
                        shadow={true}
                        value={nombreCompleto?.twoName}
                        onChange={(e) => {
                            setNombreCompleto({ ...nombreCompleto, twoName: e.target.value });
                        }}
                        color={activateValidate.validate2?"failure":undefined}
                        helperText={activateValidate.validate2?<React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment>:<React.Fragment>Este campo es obligatorio!</React.Fragment>}
                        onBlur={(e:any) => { 
                            if(e.target.value === '' || e.target.value === null){
                                setActivateValidate({...activateValidate,validate2:true});
                            }else{
                                setActivateValidate({...activateValidate,validate2:false});
                            }
                        }}
                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Primer apellido"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="text"
                        placeholder="Monteros"
                        required={true}
                        shadow={true}
                        value={nombreCompleto?.firstSurName}
                        onChange={(e) => {
                            setNombreCompleto({ ...nombreCompleto, firstSurName: e.target.value });
                        }}
                        color={activateValidate.validate3?"failure":undefined}
                        helperText={activateValidate.validate3?<React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment>:<React.Fragment>Este campo es obligatorio!</React.Fragment>}
                        onBlur={(e:any) => { 
                            if(e.target.value === '' || e.target.value === null){
                                setActivateValidate({...activateValidate,validate3:true});
                            }else{
                                setActivateValidate({...activateValidate,validate3:false});
                            }
                        }}
                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Segundo apellido"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="text"
                        placeholder="Torres"
                        required={true}
                        shadow={true}
                        value={nombreCompleto?.lastSurName}
                        onChange={(e) => {
                            setNombreCompleto({ ...nombreCompleto, lastSurName: e.target.value });
                        }}
                        color={activateValidate.validate4?"failure":undefined}
                        helperText={activateValidate.validate4?<React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment>:<React.Fragment>Este campo es obligatorio!</React.Fragment>}
                        onBlur={(e:any) => { 
                            if(e.target.value === '' || e.target.value === null){
                                setActivateValidate({...activateValidate,validate4:true});
                            }else{
                                setActivateValidate({...activateValidate,validate4:false});
                            }
                        }}
                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Fecha de nacimiento"
                        />
                    </div>
                    <TextInput

                        id="email1"
                        type="date"


                        required={true}
                        shadow={true}
                        onChange={(e) => {
                            setData({ ...dataRegister, dateBirth: new Date(e.target.value) })
                        }}
                        color={activateValidate.validate5?"failure":undefined}
                        helperText={activateValidate.validate5?<React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment>:<React.Fragment>Este campo es obligatorio!</React.Fragment>}
                        onBlur={(e:any) => { 
                            if(e.target.value === '' || e.target.value === null){
                                setActivateValidate({...activateValidate,validate5:true});
                            }else{
                                setActivateValidate({...activateValidate,validate5:false});
                            }
                        }}
                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
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
                        value={dataRegister?.password}
                        onChange={(e) => {
                            setData({ ...dataRegister, password: e.target.value });
                        }}
                        color={activateValidate.validate6?"failure":undefined}
                        helperText={activateValidate.validate6?<React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment>:<React.Fragment>Este campo es obligatorio!</React.Fragment>}
                        onBlur={(e:any) => { 
                            if(e.target.value === '' || e.target.value === null){
                                setActivateValidate({...activateValidate,validate6:true});
                            }else{
                                setActivateValidate({...activateValidate,validate6:false});
                            }
                        }}
                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Repeat password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        required={true}
                        shadow={true}
                        value={repeatPassword}
                        onChange={(e) => {
                            setRepeatPasswor(e.target.value);
                        }}
                        color={activateValidate.validate7?"failure":undefined}
                        helperText={activateValidate.validate7?<React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment>:<React.Fragment>Este campo es obligatorio!</React.Fragment>}
                        onBlur={(e:any) => { 
                            if(e.target.value === '' || e.target.value === null){
                                setActivateValidate({...activateValidate,validate7:true});
                            }else{
                                setActivateValidate({...activateValidate,validate7:false});
                            }
                        }}
                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Usuario"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="joel11"
                        required={true}
                        shadow={true}
                        value={dataRegister?.userName}
                        onChange={(e) => {
                            setData({ ...dataRegister, userName: e.target.value });
                        }}
                        color={activateValidate.validate8?"failure":undefined}
                        helperText={activateValidate.validate8?<React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment>:<React.Fragment>Este campo es obligatorio!</React.Fragment>}
                        onBlur={(e:any) => { 
                            if(e.target.value === '' || e.target.value === null){
                                setActivateValidate({...activateValidate,validate8:true});
                            }else{
                                setActivateValidate({...activateValidate,validate8:false});
                            }
                        }}

                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Correo electronico"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="email"
                        shadow={true}
                        value={dataRegister?.addressEmail}
                        onChange={(e) => {
                            setData({ ...dataRegister, addressEmail: e.target.value });
                        }}
                        color={activateValidate.validate9?"failure":undefined}
                        helperText={activateValidate.validate9?<React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment>:<React.Fragment>Este campo es obligatorio!</React.Fragment>}
                        onBlur={(e:any) => { 
                            if(e.target.value === '' || e.target.value === null){
                                setActivateValidate({...activateValidate,validate9:true});
                            }else{
                                setActivateValidate({...activateValidate,validate9:false});
                            }
                        }}
                    />
                </div>

                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="identification"
                            value="Numero de identificación"
                        />
                    </div>
                    <TextInput
                        id="identification"
                        type="text"
                        required
                        shadow={true}
                        value={dataRegister?.identification}
                        onChange={(e) => {
                            setData({ ...dataRegister, identification: e.target.value });
                        }}
                        color={activateValidate.validate10?"failure":undefined}
                        helperText={activateValidate.validate10?<React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment>:<React.Fragment>Este campo es obligatorio!</React.Fragment>}
                        onBlur={(e:any) => { 
                            if(e.target.value === '' || e.target.value === null){
                                setActivateValidate({...activateValidate,validate10:true});
                            }else{
                                setActivateValidate({...activateValidate,validate10:false});
                            }
                        }}
                    />
                </div>


                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="direccion"
                            value="Domicilio"
                        />
                    </div>
                    <TextInput
                        id="identification"
                        type="text"
                        required
                        shadow={true}
                        color={activateValidate.validate11?"failure":undefined}
                        helperText={activateValidate.validate11?<React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment>:<React.Fragment>Este campo es obligatorio!</React.Fragment>}
                        onBlur={(e:any) => { 
                            if(e.target.value === '' || e.target.value === null){
                                setActivateValidate({...activateValidate,validate11:true});
                            }else{
                                setActivateValidate({...activateValidate,validate11:false});
                            }
                        }}
                    />
                </div>

                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="countries"
                            value="Selecciona tu sexo o si eres una empresa"
                        />
                    </div>
                    <Select
                        id="countries"
                        required
                        value={dataRegister?.typeUser}
                        onChange={(e) => {
                            setData({ ...dataRegister, typeUser: e.target.value });
                        }}
                    >
                        <option>
                            Masculino
                        </option>
                        <option>
                            Femenino
                        </option>
                        <option>
                            Empresa
                        </option>
                        <option>
                            No definido
                        </option>
                    </Select>
                </div>

                <div className='col-span-2'>

                    <Button type='submit' onClick={async (e) => {
                        e.preventDefault();
                        setData({ ...dataRegister, fullName: await nameComplete(nombreCompleto) });
                        setAccion(!accion);
                    }}>Registrarse</Button>

                </div>

            </form>}


        </div>
    )
}

export default FormRegister