import { HashtagIcon } from '@heroicons/react/24/solid'
import { Label, TextInput } from 'flowbite-react'
import dynamic from 'next/dynamic'
import React from 'react'
import { useGlobalContext } from '../../../app/Context/store'

type Props = {

}

const MapFilterIntegrate = (props: Props) => {
    const { datas } = useGlobalContext();
    const MapaFilter = dynamic(() => import('../../../components/mapas/MapaFilter'), {
        loading: () => <div className='h-[200px]'></div>,
        ssr: true,

    })
    return (
       
            <div className='w-full md:col-span-1 col-span-2'>
                <div className='p-3 md:p-1 col-span-1 hidden'>
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
                <div className='p-3 md:p-1 col-span-1 hidden'>
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
                <MapaFilter />
            </div>
        
    )
}

export default MapFilterIntegrate