import React from 'react';
import './Compe.css'

const WebiIntro = () => {
    return (
        <div style={{ margin: "0", paddingTop: "180px", paddingBottom: "40px"}}>
            <h1 style={{textAlign: "center",paddingBottom: "40px", width: "80%", margin: "auto" }}>
                WEBINAR
            </h1>
            <div className="IntroContainer">
                <div className="Paragraph" style={{ width: "50%" }}>
                Seminar online mengenai investasi dan pasar modal oleh pembicara ternama dengan topik-topik yang menarik.
                </div>
            </div>
        </div>
    )
}

export default WebiIntro
