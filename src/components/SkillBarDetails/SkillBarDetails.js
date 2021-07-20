import React from 'react';
import { Container, ProgressBar, Row, Col} from 'react-bootstrap';
import './SkillBarDetails.css';

const SkillBarDetails = (props) => {
    const {titleName, progressLevel} = props.progressLevel;

    return (
        <Container>
            <Row>
                <Col className="text-light my-1 mx-0 px-0" xm={12} md={12}>{titleName}</Col>
                <Col className="my-1 mx-0 px-0" xm={12} md={12}><ProgressBar now={progressLevel} label={`${progressLevel}%`}/></Col>
            </Row>
        </Container>
        
    );
};

export default SkillBarDetails;