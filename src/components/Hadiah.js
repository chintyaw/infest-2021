import React from 'react'
import './Hadiah.css'

const Hadiah = () => {
    return (
        <div>
            <h1 style={{textAlign: "center", marginBottom: "62px"}}>Hadiah</h1>
            <div style={{ width: "100%", display: "flex", justifyContent: "center"}}>
                <img style={{ marginBottom: "200px", width: "70%", height: "auto", objectFit: "cover" }} src="/hadiah-compe.webp" alt="/" />
            </div>
        </div>
    )
}

export default Hadiah
