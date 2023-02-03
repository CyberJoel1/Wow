import { BeakerIcon, CalculatorIcon, HomeModernIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import { Button, Dropdown, Label, Radio, TextInput } from 'flowbite-react'
import React, { Dispatch, SetStateAction } from 'react'
import { useGlobalContext } from '../../../app/Context/store'
import { filterPublicationFormat } from '../../../utils/interfaces/filterPublicationFormat'

type Props = {
    setRenderData: any,
    renderData: any,
    setFilterData: Dispatch<SetStateAction<filterPublicationFormat>>,
    filterData: filterPublicationFormat
}



const InputsFilter = (props: Props) => {
    const { datas } = useGlobalContext();
    const { renderData, setFilterData, setRenderData, filterData } = props;

    const changePublications = () => {
        setFilterData({ ...filterData, latitud: datas.lat, longitud: datas.lng });
        setRenderData(!renderData);
    }
    return (

        <div className='mt-5 grid grid-cols-2 md:grid-cols-2 gap-2 m-auto w-[80%] col-span-2 md:col-span-1'>

            <div className='col-span-1'>
                <Dropdown
                    label={<><CalculatorIcon className='w-[20px]' /><p className='md:text-sm text-xs'>MEDIDAS</p></>}
                    placement="right-start"
                    arrowIcon={true}
                >
                    <Dropdown.Item >
                        <div className='grid md:grid-cols-2 grid-cols-1'>
                            <div className='p-2'>
                                <div className="">
                                    <Label
                                        htmlFor="input-gray"
                                        color="gray"
                                        value="Minima medida"
                                    />
                                </div>
                                <TextInput
                                    id="input-gray"
                                    placeholder=""
                                    required={true}
                                    color="gray"
                                    type={"number"}
                                    value={filterData.minMedida || ''}
                                    onChange={(e: any) => {
                                        setFilterData({ ...filterData, minMedida: parseFloat(e.target.value) });
                                    }}
                                />
                            </div>
                            <div className='p-2'>
                                <div className="">
                                    <Label
                                        htmlFor="input-gray"
                                        color="gray"
                                        value="Maxima medida"

                                    />
                                </div>
                                <TextInput
                                    id="input-gray"
                                    placeholder=""
                                    required={true}
                                    color="gray"
                                    type={"number"}
                                    value={filterData.maxMedida || ''}
                                    onChange={(e: any) => {
                                        setFilterData({ ...filterData, maxMedida: parseFloat(e.target.value) });
                                    }}
                                />
                            </div>
                        </div>
                    </Dropdown.Item>
                </Dropdown>
            </div>
            <div className='col-span-1'>
                <Dropdown label={<><BeakerIcon className='w-[20px]' /><p className='md:text-sm text-xs'>BAÑOS</p></>}>
                    <Dropdown.Item>
                        <div className='flex flex-col'>
                            <fieldset id="group2">
                                <div className="flex items-center gap-2">
                                    <Radio
                                        id="united-state"
                                        name="group2"
                                        value="1"
                                        onChange={(e: any) => {
                                            setFilterData({ ...filterData, banos: null });
                                        }}
                                    />
                                    <Label htmlFor="united-state">
                                        Cualquiera
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Radio
                                        id="united-state"
                                        name="group2"
                                        defaultChecked={true}
                                        value="1"
                                        checked={filterData.banos === 1}
                                        onChange={(e: any) => {
                                            setFilterData({ ...filterData, banos: parseInt(e.target.value) });
                                        }}
                                    />
                                    <Label htmlFor="united-state">
                                        1 baño
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Radio
                                        id="germany"
                                        name="group2"
                                        value="2"
                                        checked={filterData.banos === 2}
                                        onChange={(e: any) => {
                                            setFilterData({ ...filterData, banos: parseInt(e.target.value) });
                                        }}
                                    />
                                    <Label htmlFor="germany">
                                        2 baño
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Radio
                                        id="spain"
                                        name="group2"
                                        value="3"
                                        checked={filterData.banos === 3}
                                        onChange={(e: any) => {
                                            setFilterData({ ...filterData, banos: parseInt(e.target.value) });
                                        }}
                                    />
                                    <Label htmlFor="spain">
                                        3 baño
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Radio
                                        id="spain"
                                        name="group2"
                                        value="4"
                                        checked={filterData.banos === 4}
                                        onChange={(e: any) => {
                                            setFilterData({ ...filterData, banos: parseInt(e.target.value) });
                                        }}
                                    />
                                    <Label htmlFor="spain">
                                        4 o más
                                    </Label>
                                </div>
                            </fieldset>
                        </div>
                    </Dropdown.Item>
                </Dropdown>
            </div>
            <div className='col-span-1'>
                <Dropdown label={<><HomeModernIcon className='w-[20px]' /><p className='md:text-sm text-xs'>HABITACIONES</p></>}>
                    <Dropdown.Item>
                        <div className='flex flex-col'>
                            <fieldset id="group1">
                                <div className="flex items-center gap-2">

                                    <Radio
                                        id="united-state2"
                                        name="group1"
                                        value="1"
                                        onChange={(e: any) => {
                                            setFilterData({ ...filterData, habitaciones:null });
                                        }}
                                    />
                                    <Label htmlFor="united-state2">
                                        Cualquiera
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">

                                    <Radio
                                        id="united-state2"
                                        name="group1"
                                        defaultChecked={true}
                                        value="1"
                                        checked={filterData.habitaciones === 1}
                                        onChange={(e: any) => {
                                            setFilterData({ ...filterData, habitaciones: parseInt(e.target.value) });
                                        }}
                                    />
                                    <Label htmlFor="united-state2">
                                        1 habitación
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Radio
                                        id="germany2"
                                        name="group1"
                                        value="2"
                                        checked={filterData.habitaciones === 2}
                                        onChange={(e: any) => {
                                            setFilterData({ ...filterData, habitaciones: parseInt(e.target.value) });
                                        }}
                                    />
                                    <Label htmlFor="germany2">
                                        2 habitaciones
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Radio
                                        id="spain2"
                                        name="group1"
                                        value="3"
                                        checked={filterData.habitaciones === 3}
                                        onChange={(e: any) => {
                                            setFilterData({ ...filterData, habitaciones: parseInt(e.target.value) });
                                        }}
                                    />
                                    <Label htmlFor="spain2">
                                        3 habitaciones
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Radio
                                        id="spain2"
                                        name="group1"
                                        value="4"
                                        checked={filterData.habitaciones === 4}
                                        onChange={(e: any) => {
                                            setFilterData({ ...filterData, habitaciones: parseInt(e.target.value) });
                                            console.log(filterData);
                                        }}
                                    />
                                    <Label htmlFor="spain2">
                                        3 o más
                                    </Label>
                                </div>
                            </fieldset>
                        </div>
                    </Dropdown.Item>
                </Dropdown>
            </div>


            <div className='col-span-1'>
                <fieldset name='group3'>
                    <label htmlFor="small-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RANGO DE BUSQUEDA</label>
                    <input id="small-range" type="range" min={0} max={1000} className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
                        value={filterData.rango || 0}
                        onChange={(e: any) => {
                            setFilterData({ ...filterData, rango: parseInt(e.target.value) });
                        }} />

                </fieldset>
            </div>
            <div className='col-span-2'>
                <Button label={<MagnifyingGlassCircleIcon></MagnifyingGlassCircleIcon>}
                    onClick={(e: any) => {
                        changePublications();
                    }}>Buscar</Button>
            </div>

        </div>

    )
}

export default InputsFilter