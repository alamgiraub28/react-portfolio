import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './MyServiceDetails.css';



const MyServiceDetails = (props) => {
    const { serviceName, iconName } = props.service;
    console.log(iconName);

    return (
        <Col className="mt-4">
            <Card className="serviceCard shadow">
                <Card.Img className="img-fluid" src={iconName} alt="Card-image" />
                <Card.Body className="serviceCardBody">
                    <Card.Title> <h4 className="serviceTitle">{serviceName}</h4></Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MyServiceDetails;


