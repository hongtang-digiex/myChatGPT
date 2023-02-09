import { StaticImageData } from 'next/image';
import React, { useState, useEffect } from 'react'
import { VscCircleLargeFilled } from 'react-icons/vsc'
import Image from 'next/image'
import Sidebar from '../Sidebar';
import ChatBody from '../ChatBody/ChatBody';
import useWindowSize from '@/customHooks/useWindowSize';


import { MessageProvider } from '@/contexts/MessageContext';
export interface ChatProps {

    info: UserInfo

}

export interface UserInfo {
    image: {
        width: number;
        height: number;
        url: StaticImageData;
    },
    fullName: string;
    id: string
}


export default function ChatSpace({ info }: ChatProps) {

    const size = useWindowSize();
    const width = size.width


    return (
        < div className={`h-full flex p-8 bg-white rounded-lg shadow-2xl`
        }>

            {width && width >= 640 ? (<div className={`w-80`}>
                <Sidebar />
            </div>) : ''}

            <div className={`h-full w-full bg-secondary rounded-r-xl`}>
                <MessageProvider>
                    <ChatBody />
                </MessageProvider>
            </div>
        </div >
    )
}


