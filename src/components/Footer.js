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
                        <img src="/infest-logo.svg" width="105px" height="50px" alt=""/>
                        <img src="/ksep-logo-1.svg" width="50px" height="50px"  alt=""/>
                    </div>
                </div>
                <div className="FooterRight">
                    <div className="FooterTitleRight">
                        <h1 style={{justifyContent: "flex-end", width: "100%", marginBottom: '28px'}}>Informasi Kontak</h1>
                    </div>
                    <div className="FooterContact">
                        <div className="FooterEvent">
                            <h4>Webinar</h4>
                            <h5 className="ContactName">Nama</h5>
                            <div className="Whatsapp">
                                <h5>WA</h5>
                                <div className="ContactIcon">
                                    <i class="fab fa-whatsapp fa-lg" />
                                </div>
                            </div>
                            <div className="Line">
                                <h5>Line</h5>
                                <div className="ContactIcon">
                                    <i class="fab fa-line fa-lg" />
                                </div>
                            </div>

                            <h5 className="ContactName">Nama</h5>
                            <div className="Whatsapp">
                                <h5>WA</h5>
                                <div className="ContactIcon">
                                    <i class="fab fa-whatsapp fa-lg" />
                                </div>
                            </div>
                            <div className="Line">
                                <h5>Line</h5>
                                <div className="ContactIcon">
                                    <i class="fab fa-line fa-lg" />
                                </div>
                            </div>
                        </div>
                        <div className="FooterEvent">
                        <h4>Workshop</h4>
                            <h5 className="ContactName">Nama</h5>
                            <div className="Whatsapp">
                                <h5>WA</h5>
                                <div className="ContactIcon">
                                    <i class="fab fa-whatsapp fa-lg" />
                                </div>
                            </div>
                            <div className="Line">
                                <h5>Line</h5>
                                <div className="ContactIcon">
                                    <i class="fab fa-line fa-lg" />
                                </div>
                            </div>

                            <h5 className="ContactName">Nama</h5>
                            <div className="Whatsapp">
                                <h5>WA</h5>
                                <div className="ContactIcon">
                                    <i class="fab fa-whatsapp fa-lg" />
                                </div>
                            </div>
                            <div className="Line">
                                <h5>Line</h5>
                                <div className="ContactIcon">
                                    <i class="fab fa-line fa-lg" />
                                </div>
                            </div>
                                
                        </div>
                        <div className="FooterEvent">
                        <h4 style={{textOverflow: 'wrap', maxWidth: '207px'}}>Trading Competition</h4>
                            <h5 className="ContactName">Nama</h5>
                            <div className="Whatsapp">
                                <h5>WA</h5>
                                <div className="ContactIcon">
                                    <i class="fab fa-whatsapp fa-lg" />
                                </div>
                            </div>
                            <div className="Line">
                                <h5>Line</h5>
                                <div className="ContactIcon">
                                    <i class="fab fa-line fa-lg" />
                                </div>
                            </div>

                            <h5 className="ContactName">Nama</h5>
                            <div className="Whatsapp">
                                <h5>WA</h5>
                                <div className="ContactIcon">
                                    <i class="fab fa-whatsapp fa-lg" />
                                </div>
                            </div>
                            <div className="Line">
                                <h5>Line</h5>
                                <div className="ContactIcon">
                                    <i class="fab fa-line fa-lg" />
                                </div>
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
