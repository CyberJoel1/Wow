import { ChatBubbleLeftRightIcon, HandRaisedIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Image from 'next/image'
import moment from 'moment'

type Props = {
    foto: any,
    emailAddress: any,
    comment: any,
    date_created: any,
}

const IndividualCommentExtern = (props: Props) => {
    const {foto, emailAddress,comment, date_created} = props;
    const date_created_Final = moment(new Date(date_created)).format("DD/MM/YYYY HH:mm:ss");
    return (
        <div className='w-full flex flex-row mb-2 justify-end'>

            <div className=' text-opacity-90 ml-1 p-1 rounded-md pt-[5px] bg-slate-200 px-3 text-right'>
                
                <p className='h-[0.9rem] text-sm font-bodyFont font-extrabold mb-1 tracking-wide text-black'>{emailAddress}</p>
                <p className='md:text-sm text-xs text-justify break-all h-auto  font-semibold font-serif tracking-wide text-slate-800 text-opacity-95'>{comment}</p>
                <p className='text-[11px]'>{date_created_Final}</p>

            </div>
            <div className='min-w-[55px] h-11 relative'>

                <Image src={foto||'/foto1.jpg'} alt={'Hola'} fill className='rounded-full border-solid border-2 border-sky-100 cursor-pointer'></Image>
            </div>
        </div>
    )
}

export default IndividualCommentExtern