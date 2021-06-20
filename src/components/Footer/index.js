import React from 'react'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkItems>
                        <FooterLinkTitle>Acara Kami</FooterLinkTitle>
                        <FooterLink to='/webinar'>Webinar</FooterLink>
                        <FooterLink to='/workshop'>Workshop</FooterLink>
                        <FooterLink to='/competition'>Trading Comopetition</FooterLink>
                    </FooterLinkItems>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
