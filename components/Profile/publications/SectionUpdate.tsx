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
import { QueryLogin } from '../../../utils/Queries/User/LoginQueries';
import { getToken, setToken } from '../../../utils/Localstorage/ManageLocalStorage.User';

type Props = {}



const SectionUpdate = (props: Props) => {
    let initialValue = { userName: '', addressEmail: '', identification: '', fullName: '', password: '', foto: '', dateBirth: new Date() };
    const [dataRegister, setData] = useState<updateFormat>(initialValue);
    const [actualData, setActualData] = useState<any>({ addressEmail: '', userName: '', identification: '', fullName: '' });
    const [fechaDefault, setFechaDefault] = useState('24-12-1997');
    const [campoFecha, setCampoFecha]=useState<string>();
    const [nombreCompleto, setNombreCompleto] = useState<any>({ firstName: '', twoName: '', firstSurName: '', lastSurName: '' });
    const [repeatPassword, setRepeatPasswor] = useState("");
    const [nombreSeparado, setNombreSeparado] = useState<string[]>(["", "", "", ""]);
    const [activateValidate, setActivateValidate] = useState<any>({
        validate1: false, validate2: false, validate3: false
        , validate4: false, validate5: false, validate6: false, validate7: false, validate8: false, validate9: false, validate10: false, validate11: false
    });
    const { setRenderProfile, renderProfile } = useGlobalContext();
    const user = getToken();
    const fullNameConvert: any = [];
    const [accion, setAccion] = useState(false);
    function nameComplete(nombres: any): string {
        const { firstName, twoName, firstSurName, lastSurName } = nombres;

        let returnName = firstName + " " + twoName + " " + firstSurName + " " + lastSurName;
        return returnName;
    }

    const getUpdater = async (data: updateFormat, repeatPassword: string) => {
        const response = await QueryUpdater.updateUser(data, repeatPassword);
        if (response != null) {
            setToken({ userName: data.userName, addressEmail: data.addressEmail, fullName: data.fullName });
            setRenderProfile(!renderProfile);
        }
    };

    const getDataProfile = async () => {
        const response: any = await QueryLogin.getAllDataProfile(user.userName);
        if (response != null) {
            console.log("Respuesta inicial ................")
            const resultado = response['data']['getDataProfile'];
            console.log(JSON.stringify(response['data']['getDataProfile']));
            console.log(['userName']);
            
            setNombreSeparado(response['data']['getDataProfile']['fullName'].split(" "));
            const nameSeparated = response['data']['getDataProfile']['fullName'].split(" ");
            let initialValue = {
                userName: resultado['userName'], addressEmail: resultado['addressEmail'], identification: resultado['identification'], fullName: resultado['fullName'],
                 password:  resultado['password'], foto: resultado['foto'], dateBirth:  moment(resultado['dateBirth'], "DD/MM/YYYY").toDate() };
                let fechaDefault = (resultado['dateBirth']);
                let fechaFinal = fechaDefault.split("/");
                 setFechaDefault(fechaFinal[2]+"-"+fechaFinal[1]+"-"+fechaFinal[0]);
                 console.log(moment(fechaDefault).format('YYYY-MM-DD').toString());
                 setData({...initialValue});
                let initialName = { firstName: nameSeparated[0], twoName:  nameSeparated[1], firstSurName:  nameSeparated[2], lastSurName:  nameSeparated[3] }
                 setNombreCompleto({...initialName});
            return;
            }
        };

        useEffect(() => {
            if (dataRegister !== initialValue) {
                getUpdater(dataRegister, repeatPassword);
            }

            getDataProfile();




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
                            color={activateValidate.validate1 ? "failure" : undefined}
                            helperText={activateValidate.validate1 ? <React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment> : <React.Fragment>Este campo es obligatorio!</React.Fragment>}
                            onBlur={(e: any) => {
                                if (e.target.value === '' || e.target.value === null) {
                                    setActivateValidate({ ...activateValidate, validate1: true });
                                } else {
                                    setActivateValidate({ ...activateValidate, validate1: false });
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
                            value={nombreCompleto.twoName}
                            onChange={(e) => {
                                setNombreCompleto({ ...nombreCompleto, twoName: e.target.value });
                            }}
                            color={activateValidate.validate2 ? "failure" : undefined}
                            helperText={activateValidate.validate2 ? <React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment> : <React.Fragment>Este campo es obligatorio!</React.Fragment>}
                            onBlur={(e: any) => {
                                if (e.target.value === '' || e.target.value === null) {
                                    setActivateValidate({ ...activateValidate, validate2: true });
                                } else {
                                    setActivateValidate({ ...activateValidate, validate2: false });
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
                            value={nombreCompleto.firstSurName}
                            onChange={(e) => {
                                setNombreCompleto({ ...nombreCompleto, firstSurName: e.target.value });
                            }}
                            color={activateValidate.validate3 ? "failure" : undefined}
                            helperText={activateValidate.validate3 ? <React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment> : <React.Fragment>Este campo es obligatorio!</React.Fragment>}
                            onBlur={(e: any) => {
                                if (e.target.value === '' || e.target.value === null) {
                                    setActivateValidate({ ...activateValidate, validate3: true });
                                } else {
                                    setActivateValidate({ ...activateValidate, validate3: false });
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
                            value={nombreCompleto.lastSurName}
                            onChange={(e) => {
                                setNombreCompleto({ ...nombreCompleto, lastSurName: e.target.value });
                            }}
                            color={activateValidate.validate4 ? "failure" : undefined}
                            helperText={activateValidate.validate4 ? <React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment> : <React.Fragment>Este campo es obligatorio!</React.Fragment>}
                            onBlur={(e: any) => {
                                if (e.target.value === '' || e.target.value === null) {
                                    setActivateValidate({ ...activateValidate, validate4: true });
                                } else {
                                    setActivateValidate({ ...activateValidate, validate4: false });
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

                            // value={dataRegister.dateBirth.toISOString().slice(0, 10)}
                            
                            required={true}
                            shadow={true}
                            onChange={(e) => {
                                setData({ ...dataRegister, dateBirth: new Date(e.target.value) })
                                setCampoFecha(e.target.value);
                                console.log((e.target.value))
                                console.log(moment(new Date(e.target.value)).format('YYYY-MM-DD').toString());
                            }}
                            value={campoFecha || fechaDefault}
                            color={activateValidate.validate5 ? "failure" : undefined}
                            helperText={activateValidate.validate5 ? <React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment> : <React.Fragment>Este campo es obligatorio!</React.Fragment>}
                            onBlur={(e: any) => {
                                if (e.target.value === '' || e.target.value === null) {
                                    setActivateValidate({ ...activateValidate, validate5: true });
                                } else {
                                    setActivateValidate({ ...activateValidate, validate5: false });
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
                            value={dataRegister.password}
                            onChange={(e) => {
                                setData({ ...dataRegister, password: e.target.value });
                            }}
                            color={activateValidate.validate6 ? "failure" : undefined}
                            helperText={activateValidate.validate6 ? <React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment> : <React.Fragment>Este campo es obligatorio!</React.Fragment>}
                            onBlur={(e: any) => {
                                if (e.target.value === '' || e.target.value === null) {
                                    setActivateValidate({ ...activateValidate, validate6: true });
                                } else {
                                    setActivateValidate({ ...activateValidate, validate6: false });
                                }
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
                            color={activateValidate.validate7 ? "failure" : undefined}
                            helperText={activateValidate.validate7 ? <React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment> : <React.Fragment>Este campo es obligatorio!</React.Fragment>}
                            onBlur={(e: any) => {
                                if (e.target.value === '' || e.target.value === null) {
                                    setActivateValidate({ ...activateValidate, validate7: true });
                                } else {
                                    setActivateValidate({ ...activateValidate, validate7: false });
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
                            value={dataRegister.userName}
                            onChange={(e) => {
                                setData({ ...dataRegister, userName: e.target.value });
                            }}
                            color={activateValidate.validate8 ? "failure" : undefined}
                            helperText={activateValidate.validate8 ? <React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment> : <React.Fragment>Este campo es obligatorio!</React.Fragment>}
                            onBlur={(e: any) => {
                                if (e.target.value === '' || e.target.value === null) {
                                    setActivateValidate({ ...activateValidate, validate8: true });
                                } else {
                                    setActivateValidate({ ...activateValidate, validate8: false });
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
                            required={true}
                            shadow={true}
                            value={dataRegister.addressEmail}
                            onChange={(e) => {
                                setData({ ...dataRegister, addressEmail: e.target.value });
                            }}
                            color={activateValidate.validate9 ? "failure" : undefined}
                            helperText={activateValidate.validate9 ? <React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment> : <React.Fragment>Este campo es obligatorio!</React.Fragment>}
                            onBlur={(e: any) => {
                                if (e.target.value === '' || e.target.value === null) {
                                    setActivateValidate({ ...activateValidate, validate9: true });
                                } else {
                                    setActivateValidate({ ...activateValidate, validate9: false });
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
                            required={true}
                            shadow={true}
                            value={dataRegister.identification}
                            onChange={(e) => {
                                setData({ ...dataRegister, identification: e.target.value });
                            }}
                            color={activateValidate.validate10 ? "failure" : undefined}
                            helperText={activateValidate.validate10 ? <React.Fragment><span className="font-medium">Oops!</span>{' '}Este campo es obligatorio!</React.Fragment> : <React.Fragment>Este campo es obligatorio!</React.Fragment>}
                            onBlur={(e: any) => {
                                if (e.target.value === '' || e.target.value === null) {
                                    setActivateValidate({ ...activateValidate, validate10: true });
                                } else {
                                    setActivateValidate({ ...activateValidate, validate10: false });
                                }
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
                            onChange={(e: any) => {
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