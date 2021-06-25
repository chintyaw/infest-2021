import React from 'react'
import './Tema.css'

const Tema = () => {
    return (
        <div className="TemaContainer" id="Tema">
            <div className="GambarTema">
                <img src="/infest-logo.svg" width="80%" margin="auto" alt="/"/>
            </div>
            <div className="TulisanTema">
                <div className="JudulTema">
                    Rise Up and Invest
                </div>
                <div className="TemaDesc">
                    INFEST 2021 mengusung tema “Rise Up and Invest” yaitu suatu ajakan kepada masyarakat Indonesia untuk bangkit dari kondisi ekonomi yang terpuruk dengan cara berinvestasi
                </div>
            </div>
        </div>
    )
}

export default Tema