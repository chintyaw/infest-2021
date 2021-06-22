import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div className="FooterContainer">
            <div className="FooterAtas">
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
                        <div className="SocialIcon">
                            <i class="fab fa-instagram fa-2x"></i> 
                        </div>
                        <i class="fab fa-linkedin fa-2x"></i>
                    </div>
                    <div className="Logos">
                        <img src="/infest-logo.svg" width="105px" height="50px"/>
                        <img src="/ksep-logo-1.svg" width="50px" height="50px" />
                    </div>
                </div>
                <div className="FooterRight">
                    <div className="FooterTitleRight">
                        <h1 style={{textAlign: "right", width: "621px"}}>Informasi Kontak</h1>
                    </div>
                    <div className="FooterContact">
                        <div className="FooterEvent">
                            <h4>Webinar</h4>
                            <h5>Nama</h5>
                            <div className="Whatsapp">
                                <i class="fab fa-whatsapp fa-lg" />
                                <h5>WA</h5>
                            </div>
                            <div className="Line">
                                <i class="fab fa-line fa-lg" />
                                <h5>Line</h5>
                            </div>

                            <h5>Nama</h5>
                            <div className="Whatsapp">
                                <i class="fab fa-whatsapp fa-lg" />
                                <h5>WA</h5>
                            </div>
                            <div className="Line">
                                <i class="fab fa-line fa-lg" />
                                <h5>Line</h5>
                            </div>
                        </div>
                        <div className="FooterEvent">
                        <h4>Workshop</h4>
                            <h5>Nama</h5>
                            <div className="Whatsapp">
                                <i class="fab fa-whatsapp fa-lg" />
                                <h5>WA</h5>
                            </div>
                            <div className="Line">
                                <i class="fab fa-line fa-lg" />
                                <h5>Line</h5>
                            </div>

                            <h5>Nama</h5>
                            <div className="Whatsapp">
                                <i class="fab fa-whatsapp fa-lg" />
                                <h5>WA</h5>
                            </div>
                            <div className="Line">
                                <i class="fab fa-line fa-lg" />
                                <h5>Line</h5>
                            </div>
                                
                        </div>
                        <div className="FooterEvent">
                        <h4>Trading Competition</h4>
                            <h5>Nama</h5>
                            <div className="Whatsapp">
                                <i class="fab fa-whatsapp fa-lg" />
                                <h5>WA</h5>
                            </div>
                            <div className="Line">
                                <i class="fab fa-line fa-lg" />
                                <h5>Line</h5>
                            </div>

                            <h5>Nama</h5>
                            <div className="Whatsapp">
                                <i class="fab fa-whatsapp fa-lg" />
                                <h5>WA</h5>
                            </div>
                            <div className="Line">
                                <i class="fab fa-line fa-lg" />
                                <h5>Line</h5>
                            </div>
                                
                        </div>
                    </div>  
                </div>
            </div>
            
            <div className="FooterCR">
                <h5 style={{textAlign: "center"}}>&copy; INFEST 2021. All rights reserved.</h5>
            </div>
        </div>
    )
}

export default Footer
