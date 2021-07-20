import { faFacebookF, faGithub, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer style={{ paddingTop: "50px", backgroundColor: "#222729" }}>
            <Container>
                <Row>
                    <div className="footer-logo">Ala<font style={{color: "#ff9933", fontSize: "45px" }}>M</font>giR</div>
                </Row>
                <Row>
                    <div class="footer-social-link">
                        <a href="https://www.facebook.com/webdeveloperalamgir" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://www.linkedin.com/in/md-alamgir-hossain-5aa919212/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="https://github.com/alamgiraub28/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                </Row>
                <Row>
                    <div class="copywrite">
                        <p>&copy;2020 Alamgir, All right reserved.</p>
                    </div>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;