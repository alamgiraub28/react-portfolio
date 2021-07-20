import React from 'react';
import './MyService.css';
import MyServiceDetails from '../MyServiceDetails/MyServiceDetails';
import { Container, Row } from 'react-bootstrap';



const serviceData = [
    {
        id: "1",
        serviceName: "Web Development",
        description: "As per client requirement, I develop the website by using different technology like HTML5, CSS3, Bootstrap 4/5, SASS, react base website, WordPress, Elementor Pro.",
        iconName: "images/web-developmentt.jpg"
    },

    {
        id: "2",
        serviceName: "Responsive Design",
        description: "Web Design is a vital things for production any web website. I am able to support also like web UI/UX design. After confirmation of UI I go for production.",
        iconName: "images/responsive-web-design.jpg"
    },

    {
        id: "3",
        serviceName: "E-Commerce App",
        description: "I always maintain clean & organizing code, easy to understand for another developer, Responsive grid, SEO friendly and pixel perfect codding.",
        iconName: "images/ecommerce.jpg"
    },

    {
        id: "4",
        serviceName: "Custom Support",
        description: "After production any website I check frequently the user experience, bug, speed, google ranking factor using developers.google.com, Gtmetrix and some others security tools.",
        iconName: "images/custom-support.jpg"
    },

    {
        id: "5",
        serviceName: "WordPress Website",
        description: "After production any website I check frequently the user experience, bug, speed, google ranking factor using developers.google.com, Gtmetrix and some others security tools.",
        iconName: "images/wordpress.jpg"
    },

    {
        id: "6",
        serviceName: "Domain & Hosting",
        description: "After production any website I check frequently the user experience, bug, speed, google ranking factor using developers.google.com, Gtmetrix and some others security tools.",
        iconName: "images/domain-hosting.jpg"
    },
]

const MyService = () => {

    return (
        <section style={{padding: "100px 0px", backgroundColor:"#ffffff;" }} id="myService">
            <Container>
                <div className="myService">
                    <h1>My Service</h1>
                    <p>Client Satisfaction Service</p>
                </div>

                <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                    {
                        serviceData.map(service => <MyServiceDetails service={service}></MyServiceDetails>)
                    }
                </Row>
            </Container>

        </section>
    );
};

export default MyService;