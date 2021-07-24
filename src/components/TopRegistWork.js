import React from 'react';
import { Link } from "react-router-dom";
import'./TopRegist.css';

const TopRegistWork = () => {
    return (
        <div className="TopButton" style={{ marginBottom: "180px", textAlign:"center", margin: "auto" }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <button type="button" className="Button1" style={{fontFamily: 'Poppins', margin:"10px"}}>Registrasi</button>
            </Link>
        </div>
    )
}

export default TopRegistWork;