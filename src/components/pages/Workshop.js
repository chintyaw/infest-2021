import React from 'react'
import '../../App.css'
import WorkshopAbout from '../WorkshopAbout'
import BottomRegistWork from '../BottomRegistWork';
import BenefitBiayaWorkshop from '../BenefitBiayaWorkshop';
import WorkIntro from "../WorkIntro";
import TopRegistWork from '../TopRegistWork'
import SpeakerWork from '../SpeakerWork';
import Work from '../FAQWork/FaqMappingWo';

export default function Workshop(){
    return (
        <>
            <WorkIntro />
            <TopRegistWork />
            <WorkshopAbout />
            <SpeakerWork />
            <BenefitBiayaWorkshop/>
            <BottomRegistWork/>
            <Work />
        </>
    )
}
