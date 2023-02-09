import Login from "@/components/Login";
// import BackgroundImg from '@/public/images/background.png'

import Head from "next/head";
import React from "react";

const login = () => {



    return (
        <>
            <Head>
                <title>Chat GPT - Login</title>
                <meta
                    name="description"
                    content="Chat GPT"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""} />
                <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200&family=Orbitron:wght@500&family=Saira:ital,wght@1,500&display=swap" rel="stylesheet" />
            </Head>
<<<<<<< Updated upstream
            <div className={`h-screen flex justify-center items-center loginBackground`}>
=======
            <div className={`h-screen bg-black flex justify-center items-center background-url`}>
>>>>>>> Stashed changes
                <Login />
            </div>
        </>

    );
}

export default login