'use client'
import React, { useEffect, useState } from 'react'
import SchemaFilter from '../../../../components/Filter/SchemaFilter';
import SchemaInsertPublication from '../../../../components/Publication/formatInsertPublication/SchemaInsertPublication';
import SchemaPublication from '../../../../components/Publication/formatPublication/SchemaPublication';
import { filterPublicationFormat } from '../../../../utils/interfaces/filterPublicationFormat';
import { QueryPublication } from '../../../../utils/Queries/Publication/PublicationsQueries';

type Props = {}

const page = (props: Props) => {
    const [publications, setPublications] = useState<[]>();
    const [renderData, setRenderData] = useState(false);
    const [filterData, setFilterData] = useState<filterPublicationFormat>({banos:null,habitaciones:null
        ,latitud:null,longitud:null,maxMedida:null,minMedida:null,rango:null});

    const getAllPublication = async () => {
        console.log("filterData,,,,,,,,,,,,,,,,,,,,,,,,,")
        console.log(filterData)
        const response = await QueryPublication.findAllPublicationByType("venta",filterData);

        if (!response) {
            //ErrorNotification.errorNotificationLogin("Lo lamentamos no se encontraron datos");
            setPublications([]);
            return;
        }
        setPublications(response['data']['publicationAllByType']);
    };

    useEffect(() => {

        getAllPublication();

        return () => {

        }
    }, [renderData])

    const listPublications = publications?.map((element) => {
        var dates: string = (element['date_created']);
        var dateParts: any = dates.split("-");

        //month is 0-based, that's why we need dataParts[1] - 1
        var dateObject = new Date(+dateParts[0], dateParts[1] - 1, +dateParts[2]);
        console.log("fecha .................")
        console.log(dateObject)
        return (
            <div className=' mb-8'>
                <SchemaPublication title={element['titulo']} photos={element['photos']} fechaCreacion={element['date_created']}
                    comment={element['message']} banos={element['banos']} comentarios={{ title: '' }}
                    habitaciones={element['habitaciones']} meGusta={2} medida={element['medida']} key={element['identity']}
                    identity={element['identity']} renderData={renderData} setRenderData={setRenderData}
                    latitud={element['latitud']} longitud={element['longitud']} tipo={element['tipo']} userName={element['user']['userName']} nameUser={element['user']['fullName']}
                    foto={element['user']['foto']}  addressEmail={element['user']['addressEmail']} />
            </div>)
    });
    return (
        <div className='w-[70%] m-auto'>
            <SchemaFilter setRenderData={setRenderData} renderData={renderData} setFilterData={setFilterData} filterData={filterData}/>
            <div className='mx-[7%] border border-indigo-200 rounded-lg mt-6 mb-3 drop-shadow-lg'>

            </div>

            <div className='divide-y'>


                <div className='px-[7%] my-7'>
                    {listPublications}
                </div>


            </div>
        </div>
    )
}

export default page