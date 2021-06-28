import React from 'react';
import './Compe.css'

const CompeIntro = () => {
    return (
        <div style={{ margin: "0", paddingTop: "180px", paddingBottom: "40px"}}>
            <h1 style={{textAlign: "center",paddingBottom: "40px", width: "80%", margin: "auto"}}>
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
