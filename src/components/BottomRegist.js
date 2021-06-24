import React from 'react'
import { Link } from "react-router-dom";
import './BottomRegist.css'

const BottomRegist = () => {
    return (
        <div>
            <h1 style={{ fontSize: "36px", textAlign: "center", marginBottom: "40px" }}>Tertantang untuk Berkompetisi?</h1>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "120px"}}>
                    <button type="button" className="Button">Registrasi Sekarang</button>
                </div>
            </Link>
        </div>
    )
}

export default BottomRegist;
