import React from 'react';
import './Compe.css'

const BenefitBiayaWebi = () => {
    return (
        <div style={{marginBottom:"220px"}}>
            <div style={{marginBottom:"220px"}}>
                <h1 style={{textAlign: "center", marginBottom:"40px"}}>
                Benefit
                </h1>
                <img className="timeline-card" src="/benefitwork.svg" alt="benefit" />


                {/* <h2 style={{textAlign: "center", marginBottom:"20px"}}>
                • Pengajaran secara langsung
                </h2>
                <h2 style={{textAlign: "center", marginBottom:"20px"}}>
                • Hands on materi workshop
                </h2>
                <h2 style={{textAlign: "center", marginBottom:"20px"}}>
                • Sertifikat untuk setiap peserta
                </h2> */}
            </div>
            <h1 style={{textAlign: "center", marginBottom:"62px"}}>
                Biaya
            </h1>
            <img className="timeline-card" src="/biayawebi.svg" alt="benefit"/>
        </div>
    )
}

export default BenefitBiayaWebi
