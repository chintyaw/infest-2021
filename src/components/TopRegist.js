import React from 'react';
import { Link } from "react-router-dom";
import'./TopRegist.css';

const TopRegist = () => {
    return (
        <div style={{ width: "100%", marginBottom: "350px",textAlign:"center" }}>
            <Link to="/registrasicompetition" style={{ textDecoration: 'none' }}>
                <button type="button" className="Button1" style={{fontFamily: 'Poppins', fontSize: '36px', margin:"20px"}}>Registrasi</button>
            </Link>
            <Link to="/Competition" style={{ textDecoration: 'none' }}>
                <button type="button" className="Button1" style={{fontFamily: 'Poppins', fontSize: '36px', margin:"20px"}}>Link Guidebook</button>
            </Link>
        </div>
    )
}

export default TopRegist;