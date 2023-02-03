'use client'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { HashtagIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Button, Label, Modal, Select, Textarea, TextInput } from 'flowbite-react';
import DragArea from '../components/Gallery/DragArea';
import dynamic from 'next/dynamic'
import { useGlobalContext } from '../app/Context/store';
import { publicationFormat } from './interfaces/publicationFormat';
import { QueryPublication } from './Queries/Publication/PublicationsQueries';




type Props = {
  setData: Dispatch<SetStateAction<boolean>>;
  data: boolean; //apaga y prende el modal
  setRenderData: React.Dispatch<React.SetStateAction<boolean>>;
  renderData: boolean; //renderiza toda la parte de publicaiones
  valueUpdate?: publicationFormat;
  identity?: number;
  renderPublication?: any; //renderiza la actual publicaión
  setRenderPublication?: any;
}



const ModalUtil = (props: Props) => {
  const { data, setData, setRenderData, renderData, valueUpdate, identity, renderPublication, setRenderPublication } = props;
  const { datas, setDatas, arrayBlobs, setArrayBlobs } = useGlobalContext();
  let values: publicationFormat = { banos: 0, habitaciones: 0, latitud: datas.lat, longitud: datas.lng, medida: 0, mensaje: '', fotos: [], titulo: '', tipo: 'venta' }
  const [initialValue, setInitialValue] = useState<publicationFormat>(valueUpdate || values);




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
  async function registerPublicationLocal(data: publicationFormat, arrayBlob: []) {
    console.log("coordenadas .......................coordenadas ..........");
    console.log(data)
    data.latitud = datas.lat;
    data.longitud = datas.lng;
    const errores = await QueryPublication.registerPublication(data, arrayBlob);

    if (!errores) {
      setInitialValue(valueUpdate || values)
      setData(!data);
      console.log("el renderizado que tu no quieres")
      setRenderData(!renderData);
    }

  }

  async function updatePublicationLocal(data: publicationFormat, arrayBlob: [], id: number) {
    const errores = await QueryPublication.updatePublication(data, id, arrayBlob);
    if (!errores) {
      setInitialValue(valueUpdate || values)
      setData(!data);
      console.log("el renderizado que tu quieres -...............")
      setRenderPublication(true);
    }

  }


  const handleClickOutside = (event: any) => {
    if (!ref?.current?.contains(event.target)) {
      if (!findParentRoot(event.target, 12)) {
        setInitialValue(valueUpdate || values);
        setData(false);
      }

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
      <Modal show={data} onClose={() => {
        setInitialValue(valueUpdate || values)
        setData(!data)
      }}>
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

                <div className='p-3 md:p-1'>
                  <div id="select">
                    <div className="mb-2 block">
                      <Label
                        htmlFor="countries"
                        value="Tipo de inmueble"
                      />
                    </div>
                    <Select
                      id="countries"
                      required={true}
                      onChange={(e) => {
                        setInitialValue({ ...initialValue, tipo: e.target.value });
                      }}
                      value={initialValue.tipo}
                    >
                      <option>
                        venta
                      </option>
                      <option>
                        arriendo
                      </option>
                    </Select>
                  </div>
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
                  setInitialValue({ ...initialValue, mensaje: (e.target.value) });
                }}
                value={initialValue.mensaje}
              />
            </div>
            <DragArea data={data} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={async (e) => {
            e.preventDefault();
            (!identity) ? (
              await registerPublicationLocal(initialValue, arrayBlobs)) :
              await updatePublicationLocal(initialValue, arrayBlobs, identity)
          }}>
            Publicar Inmueble
          </Button>

        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default ModalUtil