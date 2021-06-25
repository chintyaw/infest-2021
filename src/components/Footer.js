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
                            <a href="https://instagram.com/infest.bdg" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-instagram fa-2x"></i>
                            </a>
                        </div>
                        <a href="https://www.linkedin.com/company/investment-festival-itb/about/" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                    <div className="Logos">
                        <img src="/infest-logo.webp" width="105px" height="50px" style={{marginRight:"20px"}} alt="" />
                        <img src="/ksep-logo.webp" width="50px" height="50px" style={{marginBottom:"-7px"}} alt="" />
                    </div>
                </div>
                <div className="FooterRight">
                    <div className="FooterTitleRight">
                        <h1 style={{ width: "100%", marginBottom: '28px' }}>Informasi Kontak</h1>
                    </div>
                    <div className="FooterContact">
                        <div className="FooterEvent">
                            <h4>Webinar</h4>
                            <h5 className="ContactName">Michael Benedict</h5>
                            <a href="https://api.whatsapp.com/send?phone=62895340721905" target="_blank" rel="noopener noreferrer">
                                <div className="Whatsapp">
                                    <h5>0895340721905</h5>
                                    <div className="ContactIcon">
                                        <i class="fab fa-whatsapp fa-lg" />
                                    </div>
                                </div>
                            </a>
                            <a href="https://line.me/ti/p/~m.benedict" target="_blank" rel="noopener noreferrer">
                                <div className="Line">
                                    <h5>m.benedict</h5>
                                    <div className="ContactIcon">
                                        <i class="fab fa-line fa-lg" />
                                    </div>
                                </div>
                            </a>

                            <h5 className="ContactName">Felicia</h5>
                            <a href="https://api.whatsapp.com/send?phone=6282177449097" target="_blank" rel="noopener noreferrer">
                            <div className="Whatsapp">
                                <h5>082177449097</h5>
                                <div className="ContactIcon">
                                    <i class="fab fa-whatsapp fa-lg" />
                                </div>
                            </div>
                            </a>
                            <a href="https://line.me/ti/p/~felprisss_" target="_blank" rel="noopener noreferrer">
                            <div className="Line">
                                <h5>felprisss_</h5>
                                <div className="ContactIcon">
                                    <i class="fab fa-line fa-lg" />
                                </div>
                            </div>
                            </a>
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
                            <h4 style={{ textOverflow: 'wrap' }}>Competition</h4>
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
                <h5 style={{ textAlign: "center", fontSize: "12px" }}>&copy; INFEST 2021. All rights reserved.</h5>
            </div>
        </div>
    )
}

export default Footer
