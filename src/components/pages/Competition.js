import React from 'react'
import '../../App.css'
import TimelineCompe from '../TimelineCompe'
import BottomRegist from '../BottomRegist'
import Hadiah from '../Hadiah'

export default function Competition(){
    return (
        <>
            <h1 className='competition'> Trading Competition </h1>
            <Hadiah />
            <TimelineCompe />
            <BottomRegist />
        </>
    )
}