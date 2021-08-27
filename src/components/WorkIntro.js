import React from 'react';
import './Compe.css'

const WorkIntro = () => {
    return (
        <div style={{ margin: "0", paddingTop: "180px", paddingBottom: "40px"}}>
            <h1 style={{textAlign: "center",paddingBottom: "40px", width: "80%", margin: "auto" }}>
                WORKSHOP
            </h1>
            <div className="IntroContainer">
                <div className="Paragraph" style={{ width: "50%" }}>
                Workshop online berisi materi sekaligus praktek langsung mengenai pengaturan keuangan oleh ahli dalam bidangnya.
                </div>
            </div>
        </div>
    )
}

export default WorkIntro
