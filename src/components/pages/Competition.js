import React from 'react'
import '../../App.css'
import TimelineCompe from '../TimelineCompe'
import BottomRegist from '../BottomRegist'
import Hadiah from '../Hadiah'
import TopRegist from '../TopRegist'
import CompeAbout from '../CompeAbout'
import BiayaPendaftaran from '../BiayaPendaftaran'
import CompeIntro from '../CompeIntro'
import AAA from '../FaqMapping'

export default function Competition(){
    return (
        <>
            <CompeIntro />
            <TopRegist />
            <CompeAbout />
            <Hadiah />
            <BiayaPendaftaran />
            <TimelineCompe />
            <AAA/>
            <BottomRegist />
        </>
    )
}