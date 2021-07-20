import React from 'react';
import './HeaderArea.css';
import fileURL from '../../img/web-developer-alamgir-resume.pdf';
import {Container, Row, Col, Button } from 'react-bootstrap';
const HeaderArea = () => {
    return (
        <header className="heroArea" id="home">
            <Container>
                <Row>
                    <Col xs={12} md={8} className="text-center m-auto heroContent">
                        <h5 className="text-light">Hello, My name is </h5>
                        <h1 style={{fontWeight:"700", color: "#ff9933", fontSize:"calc(40px + 0.5vw"}}>Alamgir Hossain</h1>
                        <h4 className="text-light">Web Developer</h4>
                        <Button href="#aboutMe" size="lg" style={{backgroundColor:"#ff9933", color:"#000000", border:"none", margin:"5px", width:"160px"}}>About Me</Button>
                        <Button href={fileURL} target="_blank" download={`portfolio-of-alamgir`} size="lg" style={{backgroundColor:"#ff9933", color:"#000000", border:"none", margin:"5px", width:"160px"}}>Download CV</Button>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default HeaderArea;