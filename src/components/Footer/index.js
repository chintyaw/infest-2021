import React from 'react';
import { FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterSubtitle, 
    FooterBody, 
    FooterBody2, 
    FooterLink } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>INFEST 2021</FooterLinkTitle>
                            <FooterSubtitle>by KSEP ITB</FooterSubtitle>
                            <FooterBody>The Biggest Investment Festival held by KSEP ITB for Indonesia</FooterBody>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterBody2>Webinar</FooterBody2>
                            <FooterLink to='/webinar'>Name 1</FooterLink>
                            <FooterLink to='/webinar'>Name 2</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterBody2>Workshop</FooterBody2>
                            <FooterLink to='/workshop'>Name 1</FooterLink>
                            <FooterLink to='/workshop'>Name 2</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterBody2>Trading Competition</FooterBody2>
                            <FooterLink to='/competition'>Name 1</FooterLink>
                            <FooterLink to='/competition'>Name 2</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
