'use client'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { HashtagIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Button, Label, Modal, Textarea, TextInput } from 'flowbite-react';
import DragArea from '../components/Gallery/DragArea';
import dynamic from 'next/dynamic'
import { useGlobalContext } from '../app/Context/store';
import { NotificationSuccess } from './SweetLibrary/SuccessNotification';
import { ErrorNotification } from './SweetLibrary/ErrorNotification';
import { CONFIG } from './Config/host';
import { publicationFormat } from './interfaces/publicationFormat';
import axios from 'axios';




type Props = {
  setData: Dispatch<SetStateAction<boolean>>;
  data: boolean;
}

async function registerPublication(data: publicationFormat, arrayBlob: []) {
  let mensajeError = '';
  try {
    console.log("Aqui esta ...."+arrayBlob.length)
    let resultFilesNames: any[] = [];
    for (var i = 0; i < arrayBlob.length; i++) {
      console.log("aqui ta .... "+arrayBlob[i])
      const fd = new FormData()
      fd.append('file', arrayBlob[i])

      // let resultImage = await (await fetch(CONFIG.host + "/file/product", {
      //   method: 'POST',
      //   body: fd,
      //   headers: {
      //     'content-type': 'multipart/form-data; boundary=X-INSOMNIA-BOUNDARY'
      //   }
      // })).json();

      let resultImage = await(await axios({
        url:CONFIG.host + "/file/product",
        method: 'POST',
        data: fd
      })).data

      
      resultFilesNames.push(resultImage.secureUrl);
   
    }
    (Object.keys(data) as (keyof typeof data)[]).forEach((key, index) => {
      if (data[key] === '') {
        throw new Error('Hay datos faltantes' + key);
      }
    });

    let login = await (await fetch("/api/profile", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })).json();
    const headers = {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + login.token,
    }


    const requestBody = {
      query: `mutation CreatePublication($createPublicationInput: CreatePublicationInput!) {
            createPublication(createPublicationInput: $createPublicationInput) {
              titulo
            }
          }`,
      variables: {
        createPublicationInput: {
          titulo: data.titulo,
          medida: data.medida,
          longitud: data.longitud,
          latitud: data.latitud,
          habitaciones: data.habitaciones,
          banos: data.banos,
          message: data.message,
          photos: resultFilesNames
        }
      }

    };

    const options = {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers
    };

    const response = await (await fetch(CONFIG.host + '/graphql', options)).json();

    if (response.errors == undefined) {
      NotificationSuccess.successNotificationLogin("Se ha registrado correctamente");

      return;
    }
    let errores = response.errors[0].extensions.response;
    mensajeError = (typeof errores.message) == 'object' ? errores.message[0] : errores.message;
  } catch (error: any) {
    mensajeError = error.message;
  }

  ErrorNotification.errorNotificationLogin(mensajeError);
}

const ModalUtil = (props: Props) => {
  const { data, setData } = props
  const { datas, setDatas, arrayBlobs, setArrayBlobs } = useGlobalContext();
  const [initialValue, setInitialValue] = useState<publicationFormat>({ banos: 0, habitaciones: 0, latitud: datas.lat, longitud: datas.lng, medida: 0, message: '', photos: [], titulo: '' });

  const ref = React.useRef<HTMLDivElement>(null);
  const findParentRoot = (value: any, saltos: number): any => {
    if (saltos > 0) {
      if (value != null) {
        if (value.parentElement?.getAttribute('aria-hidden') == 'false') {
          console.log(value.parentElement);
          return true;

        } else {
          return findParentRoot(value.parentElement, saltos - 1);
        }
      }
    }
    return false;
  }

  const handleClickOutside = (event: any) => {
    if (!ref?.current?.contains(event.target)) {
      setData(findParentRoot(event.target, 12));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);

    };
  }, []);

  const MapaRegister = dynamic(() => import('../components/mapas/MapaRegister'), {
    loading: () => <div className='h-[200px]'></div>,
    ssr: true,
    
  })

  return (
    <div ref={ref} >
      <Modal show={data} onClose={() => setData(!data)}>
        <Modal.Header>
          Ingreso inicial vivienda
        </Modal.Header>
        <Modal.Body>
          <form >
            <div>
              <MapaRegister />
              <div className='grid grid-cols-1 md:grid-cols-3 w-full'>
                <div className='p-3 md:p-1'>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email4"
                      value="Latitud"
                    />
                  </div>
                  <TextInput
                    id="email4"
                    type="number"
                    icon={HashtagIcon}
                    placeholder={datas.lat}
                    required={true}
                    disabled={true}
                    readOnly={true}

                  />
                </div>
                <div className='p-3 md:p-1'>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email4"
                      value="Longitud"
                    />
                  </div>
                  <TextInput
                    id="email4"
                    type="number"
                    icon={HashtagIcon}
                    placeholder={datas.lng}
                    required={true}
                    disabled={true}
                    readOnly={true}
                  />
                </div>
                <div className='p-3 md:p-1'>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email4"
                      value="Baños disponibles"
                    />
                  </div>
                  <TextInput
                    id="email4"
                    type="number"
                    icon={HashtagIcon}
                    placeholder="0"
                    required={true}
                    onChange={(e) => {
                      setInitialValue({ ...initialValue, banos: parseInt(e.target.value) });
                    }}
                    value={initialValue.banos}
                  />
                </div>


                <div className='p-3 md:p-1'>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email4"
                      value="Habitaciones disponibles"
                    />
                  </div>
                  <TextInput
                    id="email4"
                    type="number"
                    icon={HashtagIcon}
                    placeholder="0"
                    required={true}
                    onChange={(e) => {
                      setInitialValue({ ...initialValue, habitaciones: parseInt(e.target.value) });
                    }}
                    value={initialValue.habitaciones}
                  />
                </div>
                <div className='p-3 md:p-1'>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email4"
                      value="Medida en m2"
                    />
                  </div>
                  <TextInput
                    id="email4"
                    type="number"
                    icon={HashtagIcon}
                    placeholder="0"
                    required={true}
                    onChange={(e) => {
                      setInitialValue({ ...initialValue, medida: parseInt(e.target.value) });
                    }}
                    value={initialValue.medida}
                  />
                </div>
              </div>
              <div className='w-full md:p-1'>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email4"
                    value="Titulo de la publicación"
                  />
                </div>
                <TextInput
                  id="email4"
                  type="text"
                  // icon={HashtagIcon}
                  placeholder="Inserta el titulo de la publicación"
                  required={true}
                  onChange={(e) => {
                    setInitialValue({ ...initialValue, titulo: (e.target.value) });
                  }}
                  value={initialValue.titulo}
                />
              </div>

            </div>
            <div id="textarea">
              <div className="mb-2 block">
                <Label
                  htmlFor="comment"
                  value="Your message"
                />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required={true}
                rows={4}
                onChange={(e) => {
                  setInitialValue({ ...initialValue, message: (e.target.value) });
                }}
                value={initialValue.message}
              />
            </div>
            <DragArea data={data} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={async (e) => {
            e.preventDefault()
            await registerPublication(initialValue, arrayBlobs);
            setArrayBlobs([]);
          }}>
            I accept
          </Button>

        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default ModalUtil