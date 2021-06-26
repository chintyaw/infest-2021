import React from 'react';
import './Compe.css'

const CompeIntro = () => {
    return (
        <div style={{ margin: "0", paddingTop: "180px", paddingBottom: "40px" }}>
            <h1 style={{ fontSize: "7vh", textAlign: "center",marginBottom: "40px"}}>
                TRADING COMPETITION
            </h1>
            <div className="IntroContainer">
                <div className="Paragraph" style={{ width: "50%" }}>
                Trading competition merupakan kompetisi trading yang menitikberatkan kemampuan analisis peserta dalam upaya memperoleh keuntungan sebesar-besarnya.
                </div>
            </div>
        </div>
    )
}

export default CompeIntro
