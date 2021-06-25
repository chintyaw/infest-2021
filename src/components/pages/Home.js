import React from 'react'
import '../../App.css'
import JudulInfest from '../JudulInfest'
import Tentang from '../Tentang'
import Tema from '../Tema'

export default function Home(){
    return (
        <div>
            <JudulInfest />
            <Tentang />
            <Tema />
        </div>
    )
}