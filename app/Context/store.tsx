'use client'

import {createContext, useContext, Dispatch, SetStateAction, useState} from 'react'

type Localization = {
    lat: any,
    lng:any
}

type UserGlobal = {
    userName?: string,
    foto?: string,
    addressEmail?:string,
    fullName?: string
}


interface ContextProps {
    datas: Localization,
    setDatas: Dispatch<SetStateAction<Localization>>,
    zooms: number,
    setZooms: Dispatch<SetStateAction<number>>,
    arrayBlobs: [],
    setArrayBlobs:Dispatch<SetStateAction<any>>,
    equalUser: boolean,
    setIsEqualUser: Dispatch<SetStateAction<boolean>>,
    fotoUser: string,
    setFotoUser: Dispatch<SetStateAction<string>>,
    renderProfile: boolean,
    setRenderProfile: Dispatch<SetStateAction<boolean>>,
    user: UserGlobal,
    setUser: Dispatch<SetStateAction<UserGlobal>>
}

const GlobalContext = createContext<ContextProps>({
    datas: { lat: -0.2411834, lng: -79.1642189 },
    setDatas: (): Localization => {
        return { lat: -0.2411834, lng: -79.1642189 }
    },
    zooms: 12,
    setZooms: (): number=> 12,
    arrayBlobs: [],
    setArrayBlobs: (): [] =>[],
    equalUser: true,
    setIsEqualUser: (): true =>true,
    fotoUser:'',
    setFotoUser:():string=>'',
    renderProfile: false,
    setRenderProfile: (): false =>false,
    user: {userName:'', foto:'', addressEmail:'', fullName:''},
    setUser: (): UserGlobal =>{
        return {userName:'', foto:'',addressEmail:'', fullName:''}
    }
})

export const GlobalContextProvider = ({children}: any)=>{
    const [datas, setDatas] = useState<any>({ lat: -0.2411834, lng: -79.1642189 })
    const [zooms, setZooms] = useState<number>(12)
    const [arrayBlobs, setArrayBlobs] = useState<[]>([]);
    const [equalUser, setIsEqualUser] = useState<boolean>(true);
    const [renderProfile, setRenderProfile] = useState<boolean>(false);
    const [fotoUser, setFotoUser] = useState<string>('');
    const [user, setUser] = useState<UserGlobal>({userName:'', foto:'',addressEmail:'', fullName:''});
    return(
        <GlobalContext.Provider value={{datas, setDatas, zooms, setZooms,arrayBlobs, setArrayBlobs, equalUser,setIsEqualUser,fotoUser, setFotoUser,renderProfile, setRenderProfile,user, setUser}}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () => useContext(GlobalContext)