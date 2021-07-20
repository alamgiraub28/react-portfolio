import React, { useState } from 'react';
import './ContactUs.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Result = () => {
    return(
        <p>Your Message sent successfully</p>
    )
};

const ContactUs = () => {
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ifk8e59', 'template_mb5nijo', e.target, 'user_PwGlKJlXulfvmL08GOgFw')
        .then((result) => {
        console.log(result.text);
          }, (error) => {
        console.log(error.text);
          });
          e.target.reset();
          showResult(true)
      };
setTimeout(() => {
    showResult(false)
}, 5000);
    return (
        <section style={{ padding: "100px 0px" }} id="contact">
            <Container>
                <div className="contactUs">
                    <h1>Get In Touch</h1>
                </div>
                <Form className="contact-form" onSubmit={sendEmail}>
                    <div class="contact-text">
                        <h2>Drop Me a Line</h2>
                        <p>I am here to answer any question you may have</p>
                    </div>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="fullName" placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter Email" />
                        </Form.Group>
                    </Row>
                    <Form.Control
                        as="textarea"
                        name="message"
                        placeholder="Leave a comment here"
                        style={{height: '100px'}}
                    />
                    <Button className="contact-form-btn" type="submit" size="lg" style={{ backgroundColor: "#ff9933", color: "#000000", border: "none", marginRight: "10px", width: "160px", marginTop: "25px" }}>Submit</Button>
                    <div className="row">
                        {result ? <Result/> : null}
                    </div>
                </Form>
            </Container>
        </section>
    );
};

export default ContactUs;