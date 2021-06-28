import React from 'react'
import './Tema.css'

const Tema = () => {
    return (
        <div className="TemaContainer">
            <div className="GambarTema">
                <img src="/gambartema.webp" width="100%" alt="/"/>
            </div>
            <div className="TulisanTema">
                <div className="JudulTema" style={{textShadow: "-6px 4px 4px rgba(0, 0, 0, 0.25)" }}>
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
