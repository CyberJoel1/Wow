'use client'

import {createContext, useContext, Dispatch, SetStateAction, useState} from 'react'

type Localization = {
    lat: any,
    lng:any
}


interface ContextProps {
    datas: Localization,
    setDatas: Dispatch<SetStateAction<Localization>>
    zooms: number,
    setZooms: Dispatch<SetStateAction<number>>,
    arrayBlobs: []
    setArrayBlobs:Dispatch<SetStateAction<any>>
}

const GlobalContext = createContext<ContextProps>({
    datas: { lat: -0.2411834, lng: -79.1642189 },
    setDatas: (): Localization => {
        return { lat: -0.2411834, lng: -79.1642189 }
    },
    zooms: 12,
    setZooms: (): number=> 12,
    arrayBlobs: [],
    setArrayBlobs: (): [] =>[]
})

export const GlobalContextProvider = ({children}: any)=>{
    const [datas, setDatas] = useState<any>({ lat: -0.2411834, lng: -79.1642189 })
    const [zooms, setZooms] = useState<number>(12)
    const [arrayBlobs, setArrayBlobs] = useState<[]>([]);
    return(
        <GlobalContext.Provider value={{datas, setDatas, zooms, setZooms,arrayBlobs, setArrayBlobs}}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () => useContext(GlobalContext)