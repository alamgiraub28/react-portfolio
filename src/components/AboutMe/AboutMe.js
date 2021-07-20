import React from 'react';
import './AboutMe.css';
import profilePhoto from '../../img/about-me-pic-new.jpg';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faYoutube, } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
    return (
        <section style={{ margin: "100px 0px" }} id="aboutMe">
            <Container>
                <div className="sectionTitle">
                    <h1>About Me</h1>
                    <p>Here is my short description</p>
                </div>
                <Row className="align-items-center">
                    <Col xm={12} md={4}>
                        <img style={{width:"100%", marginBottom:"10px"}} src={profilePhoto} alt="" />
                    </Col>
                    <Col xm={12} md={8}>
                        <div class="aboutMeContent">
                            <h4>Alamgir Hossain</h4>
                            <h6>Web Developer</h6>
                            <p className="text-justify">I am self-taught web developer. From the beginning of 2019 I started to learn and explore about the Web Development. I love to code and learn everyday in this field. My passion is now to become a lead Web Developer. I am working in Upwork as a freelancer. <span className="d-none">But I want to learn more through my formal work experience and from my senior colleagues. Recently I have finished a Complete web Development Course from programming-hero.com which was really good for me to upgrade myself and I still learning from freeCodeCamp. I always try to follow modern technology, designs and committed to high standards of user experience, usability and speed over more than 2 years for multiple users. Lends detailed knowledge of SEO to increase visibility.</span> </p>
                            <Row>
                                <Col xm={12} md={6}>
                                    <Table striped bordered>
                                        <tbody>
                                            <tr className="text-secondary">
                                                <td><b>Birthday: </b> 28th October, 1986</td>

                                            </tr>
                                            <tr className="text-secondary">
                                                <td><b>Skype: </b> alamgiraub28@gmail.com</td>
                                            </tr>

                                            <tr className="text-secondary">
                                                <td><b>Experience: </b> 2 Years</td>

                                            </tr>
                                            <tr className="text-secondary">
                                                <td><b>Freelance: </b> Available</td>
                                            </tr>

                                        </tbody>
                                    </Table>

                                </Col>
                                <Col xm={12} md={6}>
                                    <Table striped bordered>
                                        <tbody>
                                            <tr className="text-secondary">
                                                <td><b>Phone: </b> +880 1795 333 022</td>
                                            </tr>
                                            <tr className="text-secondary">

                                                <td><b>Email: </b> alamgiraub28@gmail.com</td>
                                            </tr>

                                            <tr className="text-secondary">

                                                <td><b>Residence: </b> Bangladesh</td>
                                            </tr>
                                            <tr className="text-secondary">
                                                <td><b>Github-Link: </b> www.github.com/alamgiraub28</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                           
                            <a className="aboutMe-social-link" href="https://www.facebook.com/webdeveloperalamgir" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="socialNew" icon={faFacebookF} /></a>
                            <a className="aboutMe-social-link" href="https://www.linkedin.com/in/md-alamgir-hossain-5aa919212/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="socialNew" icon={faLinkedinIn} /></a>
                            <a className="aboutMe-social-link" href="https://github.com/alamgiraub28/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="socialNew" icon={faGithub} /></a>
                            <a className="aboutMe-social-link" href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="socialNew" icon={faYoutube} /></a>                           
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    );
};

export default AboutMe;