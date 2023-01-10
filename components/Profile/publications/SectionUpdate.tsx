import { Button, FileInput, Label, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { ErrorNotification } from '../../../utils/SweetLibrary/ErrorNotification';
import { NotificationSuccess } from '../../../utils/SweetLibrary/SuccessNotification';
import { updateFormat } from '../../../utils/interfaces/updateFormat';
import { useRouter } from 'next/router';
import { CONFIG } from '../../../utils/Config/host';
import { QueryUpdater } from '../../../utils/Queries/User/UpdateQuery';
import moment from 'moment';
import { useGlobalContext } from '../../../app/Context/store';

type Props = {}



const SectionUpdate = (props: Props) => {
    let initialValue = { userName: '', addressEmail: '', identification: '', fullName: '', password: '', foto: '', dateBirth: new Date() };
    const [dataRegister, setData] = useState<updateFormat>(initialValue);
    const [nombreCompleto, setNombreCompleto] = useState<any>({ firstName: '', twoName: '', firstSurName: '', lastSurName: '' });
    const [repeatPassword, setRepeatPasswor] = useState("");
    const {setRenderProfile, renderProfile} = useGlobalContext();
    const [accion, setAccion] = useState(false);
    function nameComplete(nombres: any): string {
        const { firstName, twoName, firstSurName, lastSurName } = nombres;

        let returnName = firstName + " " + twoName + " " + firstSurName + " " + lastSurName;
        return returnName;
    }

    const getUpdater = async (data: updateFormat, repeatPassword: string) => {
        const response = await QueryUpdater.updateUser(data, repeatPassword);
        if(response != null){
            setRenderProfile(!renderProfile);
        }
    };

    useEffect(() => {
        if (dataRegister !== initialValue) {
            getUpdater(dataRegister, repeatPassword);
        }

        return () => {

        }
    }, [accion])

    return (

        <div>
            <h2 className='text-xl text-center pb-5 pt-3 '>Actualiza tu información</h2>
            <form className="grid grid-flow-col-2 gap-4">
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
                        value={nombreCompleto.firstName}

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
                        value={nombreCompleto.twoName}
                        onChange={(e) => {
                            setNombreCompleto({ ...nombreCompleto, twoName: e.target.value });
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
                        value={nombreCompleto.firstSurName}
                        onChange={(e) => {
                            setNombreCompleto({ ...nombreCompleto, firstSurName: e.target.value });
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
                        value={nombreCompleto.lastSurName}
                        onChange={(e) => {
                            setNombreCompleto({ ...nombreCompleto, lastSurName: e.target.value });
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
                        
                        // value={dataRegister.dateBirth.toISOString().slice(0, 10)}
                        required={true}
                        shadow={true}
                        onChange={(e) => {
                            setData({ ...dataRegister, dateBirth: new Date(e.target.value) })
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
                        value={dataRegister.password}
                        onChange={(e) => {
                            setData({ ...dataRegister, password: e.target.value });
                        }}

                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Anterior password"
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
                        value={dataRegister.userName}
                        onChange={(e) => {
                            setData({ ...dataRegister, userName: e.target.value });
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
                        required={true}
                        shadow={true}
                        value={dataRegister.addressEmail}
                        onChange={(e) => {
                            setData({ ...dataRegister, addressEmail: e.target.value });
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
                        required={true}
                        shadow={true}
                        value={dataRegister.identification}
                        onChange={(e) => {
                            setData({ ...dataRegister, identification: e.target.value });
                        }}

                    />
                </div>
                <div id="fileUpload" className='col-span-2'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="file"
                            value="Subir foto de perfil"
                        />
                    </div>
                    <FileInput
                        id="file"
                        helperText="Subo tu foto de perfil, si quieres que los demás te vean"
                        accept="image/*"
                        onChange={(e:any) => {
                            setData({ ...dataRegister, foto: e.target.files[0] });
                        }}
                    />
                </div>
                <div className='col-span-2'>

                    <Button onClick={() => {
                        setData({ ...dataRegister, fullName: nameComplete(nombreCompleto) });
                        setAccion(!accion);

                    }}>Actualizar</Button>

                </div>

            </form>

        </div>
    )
}

export default SectionUpdate