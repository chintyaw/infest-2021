import React from 'react'
import { Link } from "react-router-dom";
import './BottomRegistWork.css'

const BottomRegist = () => {
    return (
        <div>
            <h1 style={{textAlign: "center", marginBottom: "40px"}} >Tertarik dengan Workshop?</h1>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "120px" }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button type="button" className="Button">Registrasi Sekarang</button>
                </Link>
            </div>
        </div>
    )
}

export default BottomRegist;