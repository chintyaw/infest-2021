import React from 'react'
import '../../App.css'
import JudulInfest from '../JudulInfest'
import Tentang from '../Tentang'
import Tema from '../Tema'

export default function Home(){
    return (
        <div style={{backgroundImage: "url(/background.svg)", backgroundSize: "100%"}}>
            <JudulInfest />
            <Tentang />
            <Tema />
        </div>
    )
}