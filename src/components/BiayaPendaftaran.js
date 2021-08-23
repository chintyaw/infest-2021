import React from 'react';
import './Compe.css'

const BiayaPendaftaran = () => {
    return (
        <div style={{marginBottom:"220px"}}>
            <h1 style={{textAlign: "center", marginBottom:"20px"}}>
                Biaya Pendaftaran
            </h1>
            <div className="Daftar">
                Early Bird <span style={{fontFamily:"Lexend Deca", fontSize:"0.8em", lineHeight:"56px"}}>(2 Juli - 11 Juli 2021)</span>
                <br></br>Rp100.000,00
                <br></br><br></br><br></br>
                Normal <span style={{fontFamily:"Lexend Deca", fontSize:"0.8em", lineHeight:"56px"}}>(12 Juli - 25 Juli 2021)</span>
                <br></br>Rp150.000,00
            </div>
        </div>
    )
}

export default BiayaPendaftaran