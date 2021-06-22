import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div className="FooterContainer">
            <div className="FooterLeft">
                <div className="FooterTitle">
                    <h1>INFEST 2021</h1>
                </div>
                <div className="FooterSubtitle">
                    <h2>by KSEP ITB</h2>
                </div>
                <div className="FooterBody">
                    <h3>The Biggest Investment Festival held by KSEP ITB for Indonesia</h3>
                </div>
                <div className="SocialMedia">
                    <i class="fab fa-instagram fa-2x"></i> 
                    <i class="fab fa-linkedin fa-2x"></i>
                </div>
                <div className="Logos">
                    <img src="/infest-logo.svg" width="150px" height="50px" alt="" />
                    <img src="/ksep-logo-1.svg" width="50px" height="50px" alt="" />
                </div>
            </div>
            <div className="FooterRight">
                <div className="FooterTitle">
                    <h1>Informasi Kontak</h1>
                </div>
                <div className="FooterContact">
                    <div className="FooterEvent">
                            
                    </div>
                    <div className="FooterEvent">
                            
                    </div>
                    <div className="FooterEvent">
                            
                    </div>
                </div>  
            </div>
            <div className="FooterCR">

            </div>
        </div>
    )
}

export default Footer
