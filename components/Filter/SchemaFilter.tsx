import React, { Dispatch, SetStateAction } from 'react'
import { filterPublicationFormat } from '../../utils/interfaces/filterPublicationFormat'
import InputsFilter from './InputsFilter/InputsFilter'
import MapFilterIntegrate from './MapFilter/MapFilterIntegrate'

type Props = {
    setRenderData:any,
    renderData:any,
    setFilterData:Dispatch<SetStateAction<filterPublicationFormat>>,
    filterData:filterPublicationFormat
}

const SchemaFilter = (props: Props) => {
    const {renderData,setFilterData,setRenderData,filterData} = props;
    return (
        <div>
            <div className='grid grid-cols-2 pt-6'>
                <div className='col-span-2 md:col-span-2'><h1 className='text-center font-bodyFont text-lg'>Filtros de publicaciones</h1></div>
            <MapFilterIntegrate />
            <InputsFilter setRenderData={setRenderData} renderData={renderData} setFilterData={setFilterData} filterData={filterData}/>
            </div>
        </div>
    )
}

export default SchemaFilter