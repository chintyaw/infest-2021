import React from 'react'
import '../../App.css'
import WorkshopAbout from '../WorkshopAbout'
import BottomRegistWork from '../BottomRegistWork';
import BenefitBiayaWorkshop from '../BenefitBiayaWorkshop';

export default function Workshop(){
    return (
        <>
            <h1 className='workshop'> Coming Soon </h1>
            <WorkshopAbout />
            <BenefitBiayaWorkshop/>
            <BottomRegistWork/>
        </>
    )
}
