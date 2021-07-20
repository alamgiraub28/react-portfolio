import React from 'react';
import './SkillBar.css';
import { Container, Row, Col, Tab, Tabs, Card } from 'react-bootstrap';
import skillPhoto from '../../img/skill-photo.jpg';
import SkillBarDetails from '../SkillBarDetails/SkillBarDetails';
import CountUp from 'react-countup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faHandsHelping, faThumbsUp } from '@fortawesome/free-solid-svg-icons';



const SkillBar = () => {

    const frameWorksDatas = [
        {
            id: "1",
            titleName: "REACT",
            progressLevel: "85",
        },

        {
            id: "2",
            titleName: "BOOTSTRAP",
            progressLevel: "95",
        },

        {
            id: "3",
            titleName: "MATERIAL UI",
            progressLevel: "85",
        },


        {
            id: "4",
            titleName: "SASS",
            progressLevel: "70",
        },

        {
            id: "5",
            titleName: "NODE",
            progressLevel: "75",
        },

        {
            id: "6",
            titleName: "EXPRESS",
            progressLevel: "60",
        }
    ]

    const webLanguageDatas = [
        {
            id: "1",
            titleName: "HTML5",
            progressLevel: "96",
        },

        {
            id: "2",
            titleName: "CSS3",
            progressLevel: "95",
        },

        {
            id: "3",
            titleName: "JAVASCRIPT",
            progressLevel: "75",
        },

        {
            id: "4",
            titleName: "TYPESCRIPT",
            progressLevel: "60",
        }
    ]

    const uiDesignTools = [
        {
            id: "1",
            titleName: "PHOTOSHOP",
            progressLevel: "98",
        },

        {
            id: "2",
            titleName: "ILLUSTRATOR",
            progressLevel: "95",
        },

        {
            id: "3",
            titleName: "ADOBE XD",
            progressLevel: "90",
        },

        {
            id: "4",
            titleName: "FIGMA",
            progressLevel: "80",
        },

        {
            id: "5",
            titleName: "SKETCH",
            progressLevel: "75",
        }
    ]

    const cmsDevelopment = [
        {
            id: "1",
            titleName: "WORDPRESS",
            progressLevel: "95",
        },

        {
            id: "2",
            titleName: "ELEMENTOR",
            progressLevel: "97",
        },

        {
            id: "3",
            titleName: "WPBAKERY",
            progressLevel: "85",
        },

        {
            id: "4",
            titleName: "DIVI",
            progressLevel: "80",
        },

        {
            id: "4",
            titleName: "WOOCOMMERCE",
            progressLevel: "95",
        }
    ]

    return (
        <section style={{ backgroundColor: "#222729", padding: "100px 0px" }} id="skillBar">
            <Container>
                <div className="skillBar mb-4">
                    <h1>I'm Skills</h1>
                    <p>I have the following skills.</p>
                </div>
                <Row className="align-items-center">

                    <Col xm={12} md={7}>
                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-4">
                            <Tab eventKey="home" title="Web Frameworks">
                                {
                                    frameWorksDatas.map(progressLevel => <SkillBarDetails progressLevel={progressLevel}></SkillBarDetails>)
                                }
                            </Tab>
                            <Tab eventKey="profile" title="Web Language">
                                {
                                    webLanguageDatas.map(progressLevel => <SkillBarDetails progressLevel={progressLevel}></SkillBarDetails>)
                                }
                            </Tab>
                            <Tab eventKey="contact" title="UI Design Tools">
                                {
                                    uiDesignTools.map(progressLevel => <SkillBarDetails progressLevel={progressLevel}></SkillBarDetails>)
                                }
                            </Tab>
                            <Tab eventKey="cms" title="CMS & Plugins">
                                {
                                    cmsDevelopment.map(progressLevel => <SkillBarDetails progressLevel={progressLevel}></SkillBarDetails>)
                                }
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col xm={12} md={5} className="mt-3">
                        <img className="img-fluid" src={skillPhoto} alt="" />
                    </Col>
                </Row>
                <Row className="mt-5" xs={1} sm={2} md={2} lg={4}>
                    <Col>
                        <Card className="countup-card">
                            <Card.Body>
                                <FontAwesomeIcon className="text-secondary countUpIcon" icon={faThumbsUp} />
                                <Card.Title className="text-light"><h1 className="text-light"><CountUp end={150000} duration={10} />+</h1></Card.Title>
                                <Card.Text className="text-secondary">
                                    Codding
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="countup-card">
                            <Card.Body>
                                <FontAwesomeIcon className="text-secondary countUpIcon" icon={faHandsHelping} />
                                <Card.Title className="text-light"><h1><CountUp end={150} duration={10} start={0} />+</h1></Card.Title>
                                <Card.Text className="text-secondary">
                                    Project Done
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="countup-card">
                            <Card.Body>
                                <FontAwesomeIcon className="text-secondary countUpIcon" icon={faThumbsUp} />
                                <Card.Title className="text-light"><h1 className="text-light"><CountUp end={90} duration={10} />+</h1></Card.Title>
                                <Card.Text className="text-secondary">
                                    Happy Client
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="countup-card">
                            <Card.Body>
                                <FontAwesomeIcon className="text-secondary countUpIcon" icon={faCrown} />
                                <Card.Title className="text-light"><h1><CountUp end={50} duration={10}>
                                </CountUp>+</h1></Card.Title>
                                <Card.Text className="text-secondary">
                                    Awards
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
};

export default SkillBar;