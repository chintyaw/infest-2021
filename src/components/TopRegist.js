import React from 'react';
import { Link } from "react-router-dom";
import'./TopRegist.css';

const TopRegist = () => {
    return (
        <div className="TopButton" style={{ marginBottom: "180px", textAlign:"center", margin: "auto" }}>
            <Link to="/registrasicompetition" style={{ textDecoration: 'none' }}>
                <button type="button" className="Button1" style={{fontFamily: 'Poppins', margin:"10px"}}>Registrasi</button>
            </Link>
            <Link to="/competition" style={{ textDecoration: 'none' }}>
                <button type="button" className="Button1" style={{fontFamily: 'Poppins', margin:"10px"}}>Link Guidebook</button>
            </Link>
        </div>
    )
}

export default TopRegist;