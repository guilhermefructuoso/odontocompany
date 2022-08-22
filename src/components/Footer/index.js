import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './footer.css'
import logo from '../../assets/logo.png'
import { GrInstagram } from 'react-icons/gr'
import { ImFacebook2 } from 'react-icons/im'
import line from '../../assets/line.png'

import bark from '../../assets/barkout.svg'

function Footer() {
    return (
        <div className="footer-content">
            <div className="footer-container">
                <div className="logo-footer">
                    <AnchorLink href="#home">
                        <img src={logo} alt="Sistema Logo" />
                    </AnchorLink>
                </div>
                <div className="social">
                    <div className="follow">
                        <h3>SIGA-NOS:</h3>
                    </div>
                    <div className="insta">
                        <a
                            href="https://www.instagram.com/odontocompany_humaita/?hl=pt-br"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GrInstagram className="footer-icon" size={30} />
                        </a>
                    </div>
                    <div className="insta">
                        <a
                            href="https://www.facebook.com/OdontocompanyHumaita"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ImFacebook2 className="footer-icon" size={30} />
                        </a>
                    </div>
                </div>
                <div className="h3-footer">
                    <p>
                        EPAO - 022883 <br />
                        Responsável técnico: Dra Neziane Duarte
                        <br />
                        CRO: 125293
                    </p>
                </div>
            </div>
            <div className="rodape">
                <div className="linha">
                    <img src={line} alt="Sistema Logo" />
                </div>
                <div className="p-footer">
                    <p>OdontoCompany 2022 © Desenvolvido por</p>
                    <div>
                        <a
                            href="https://www.instagram.com/agenciabarkout/"
                            target="-blank"
                        >
                            {' '}
                            <img src={bark} alt="Sistema Logo" />{' '}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
