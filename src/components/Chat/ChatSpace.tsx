import React from 'react'
import Sidebar from '../Sidebar';
import ChatBody from '../ChatBody/ChatBody';
import useWindowSize from '@/customHooks/useWindowSize';
import { ChatProps } from '@/utils/interfaces';

export default function ChatSpace() {

    const size = useWindowSize();
    const width = size.width

    return (
        <div
            className={`h-full flex bg-white shadow-2xl justify-center`}
        >
            {width && width >= 640 && (<div className={`w-1/4 xl:w-1/6`}>
                <Sidebar />
            </div>)}

            <div className={`h-[100vh] bg-secondary w-full md:w-3/4 xl:w-5/6`}>
                <ChatBody />
            </div>
        </div >
    )
}


