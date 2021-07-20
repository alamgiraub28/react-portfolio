import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import './MyPortfolioDetails.css';


const MyPortfolioDetails = (props) => {
    const { projectName, projectImg, projectLink, projectDescription } = props.portfolio;
    return (
        <Col className="mt-2">
            <Card className="text-center portfolioCard shadow">
                <Card.Img className="cardImg" src={projectImg} alt="Card-image"/>
                <Card.Body className="hoverStyle">
                    <Card.Title> <h1 style={{color:"#ff9933"}}>{projectName}</h1></Card.Title>
                    <Card.Text>
                        <p>{projectDescription}</p>
                    </Card.Text>
                    <Button className="btn-custom-demoLink" href={projectLink} target="_blank" size="lg" style={{ backgroundColor: "transparent", color: "#ff9933", border: "1px solid #ff9933", width: "160px", margin: "auto" }}>Live Demo</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MyPortfolioDetails;