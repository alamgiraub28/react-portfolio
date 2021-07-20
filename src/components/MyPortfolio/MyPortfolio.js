import React, { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import MyPortfolioDetails from '../MyPortfolioDetails/MyPortfolioDetails';
import './MyPortfolio.css';

const portfolioData = [
    
    {
        id:"1",
        projectName:"HTML",
        category:"html",
        projectImg:"images/html-css-bootstrap-online-school.png",
        projectLink: "https://alamgiraub28.github.io/E-School/",
        projectDescription: "This is the simple HTML online school website. It is developed by HTML5 and CSS3 with popular bootstrap 4 framework. Students can buy the course anytime and register in the class."
    },

    {
        id:"2",
        projectName:"HTML",
        category:"html",
        projectImg:"images/html-css-bootstrap5.png",
        projectLink: "https://alamgiraub28.github.io/shoesBazar/",
        projectDescription: "It is a simple ecommerce home page template by HTML5 and CSS3 with bootstrap5. Payment method is not integrated. It has Navigation bar, hero area, different shoe category and contact us section."
    },

    {
        id:"3",
        projectName:"JavaScript",
        category:"javaScript",
        projectImg:"images/javaScript-ticketing-system.png",
        projectLink: "https://alamgiraub28.github.io/discover-fly/",
        projectDescription: "This is a ticket booking form. User can booked their ticket using this form. It is developed by pure JavaScript for functionality and UI by HTML5 and CSS3 with Bootstrap5."
    },

    {
        id:"4",
        projectName:"JavaScript",
        category:"javaScript",
        projectImg:"images/javaScript-PIN Matcher.png",
        projectLink: "https://alamgiraub28.github.io/PIN-Matcher/",
        projectDescription: "This is a PIN Matching application. The functionality is developed by Pure JavaScript. User can generate any Random PIN and Matching the PIN by dialing keypad. If the PIN is Match. It will alert success message otherwise it will show wrong PIN. "
    },

    {
        id:"5",
        projectName:"JavaScript",
        category:"javaScript",
        projectImg:"images/javaScript-food-app.png",
        projectLink: "https://alamgiraub28.github.io/hungry-monoster/",
        projectDescription: "This is food recipe application. User can find any food item by searching and also able to see the all ingredient for the particular food item. This application developed by Pure JavaScript and integrated API in to it."
    },

    {
        id:"6",
        projectName:"JavaScript",
        category:"javaScript",
        projectImg:"images/javaScript-slider.png",
        projectLink: "https://alamgiraub28.github.io/fency-slider/",
        projectDescription: "This is a slider making application, developed by Pure JavaScript using API link. Visitor can search any category image and have to select at least three image for creating the slider."
    },

    {
        id:"7",
        projectName:"React",
        category:"react",
        projectImg:"images/react-simple-app.png",
        projectLink: "https://suspicious-brahmagupta-77ec53.netlify.app/",
        projectDescription: "This application is a simple react base. Visitor can add any player with the price. When any want to add a player. It will show the player name and their price."
    },

    {
        id:"8",
        projectName:"React",
        category:"react",
        projectImg:"images/react-router-simple-app.png",
        projectLink: "https://silly-poitras-e76608.netlify.app/",
        projectDescription: "It is a sports application for any playing club. It is developed by React.js with API link integration. You can explore the club name by clicking button of the card and seethe details of the particular club Name."
    },

    {
        id:"9",
        projectName:"React",
        category:"react",
        projectImg:"images/uiuxit-react.png",
        projectLink: "https://uiuxit.com/",
        projectDescription: "UIUXIT is a web design and development agency. It is developed by me. After approval PSD UI design I have developed it by using React.js, here I use css style Bootstrap5 framework."
    },

    {
        id:"10",
        projectName:"React",
        category:"react",
        projectImg:"images/threeRoute-app.png",
        projectLink: "https://optimistic-almeida-767444.netlify.app/",
        projectDescription: "This is a SPA (Single Page Application) Travel app where people are able to select Vehhicle type and buy any rider with there information. It is buid on latest React, firebase for login auth, No Jquery, React Bootstrap, Bootstrap5 for responsive issue."
    },

    {
        id:"11",
        projectName:"React",
        category:"react",
        projectImg:"images/travelhub-app.png",
        projectLink: "https://sharp-pike-80f305.netlify.app/",
        projectDescription: "This is a SPA (Single Page Application) Travel app where people are able to select Vehhicle type and buy any rider with there information. It is buid on latest React, firebase for login auth, No Jquery, React Bootstrap, Bootstrap5 for responsive issue."
    },


    {
        id:"12",
        projectName:"MERN",
        category:"mern",
        projectImg: "images/MERN-project.png",
        projectLink: "https://adalatfirm.web.app/",
        projectDescription: "This is a MERN Project. I have added some features like Admin Panel, firebase auth, payment gateway system by using technologies like React, React router, context API, HTML5, CSS3, Bootstrap5, React-Bootstrap, Node.js, Express.js and MongoDB for database"
    },

    {
        id:"13",
        projectName:"MERN",
        category:"mern",
        projectImg: "images/fullStack-ecommerce.png",
        projectLink: "https://ebrandshop-ae330.web.app/",
        projectDescription: "This is also a MERN Project. It is like ecommerce web app with firebase, auth, Admin panel, customer order panel, buynow button with auth and sent order details to MongoDB. I have used technologies here like React, React router, context API, HTML5, CSS3, Bootstrap5, React-Bootstrap, Node.js, Express.js and MongoDB for database"
    },

    {
        id:"14",
        projectName:"WordPress",
        category:"wordpress",
        projectImg:"images/three-route-wp-elementor.png",
        projectLink: "https://threeroute.com/",
        projectDescription: "This is the wordpress website which developed by me. I have convert PSD UI to WP website using porpular wP Elementor plugins. It is a travel agency website, It is developed as per client requirement and maintain Pixel perfect codding"
    },

    {
        id:"15",
        projectName:"WordPress",
        category:"wordpress",
        projectImg:"images/caketime-wp-elementor.png",
        projectLink: "https://uiuxit.com/caketimelimited/",
        projectDescription: "This wordpress website converted from Figma to WP using porpular wP Elementor plugins. It is a food ecommerce web app, It is developed as per client requirement. It is a total buying site with payment integration nd use very popular WooCommerce plugins for product management."
    },

    {
        id:"16",
        projectName:"WordPress",
        category:"wordpress",
        projectImg:"images/ebrandshop-wp-ecommerce.png",
        projectLink: "https://ebrandshop.xyz/",
        projectDescription: "This is also a eCommerce website for Beauty care product. It is now under construction. It is developing by WooCommerce, Elementor, HT Slider, Jetpack, Qi Addons for Elementor, WooLentor  plugins etc."
    },

    {
        id:"17",
        projectName:"WordPress",
        category:"wordpress",
        projectImg:"images/st-wp-theme.png",
        projectLink: "https://satkhiratourism.com/",
        projectDescription: "This website developed by WP theme and some plugins. It is a simple WP travel and tourism related website. Visitor can know about the destination information with the ticketing price and able to contact with the service holder directly"
    },

    {
        id:"18",
        projectName:"WordPress",
        category:"wordpress",
        projectImg:"images/wp-theme-ecommerce-site.png",
        projectLink: "https://uiuxit.com/joysupershop/",
        projectDescription: "This is the green mart theme for eCommerce solution. It can be modified as per requirement of the client. Here is the order system, payment gateway system, dashboard, customer panel, dynamic review section, WooCommerce plugins for all product management."
    },

    {
        id:"19",
        projectName:"WordPress",
        category:"wordpress",
        projectImg:"images/book-selling-site-wp-elementor.png",
        projectLink: "https://oscargregory.co.uk/",
        projectDescription: "This website converted from PSD to WP website. After aproval of UI design from client. I develop it by using WP Elementor, WooCommerce, socail link integration, dynamic review system plugins, carousel slider and developed as per responsive issue. "
    }
]

const MyPortfolio = () => {

       const [portfolioImg, setPorfolioImg] = useState(portfolioData)
        const [visible, setVisible] = useState(6);
       const handleItem = (categoryItem) => {
        const updatedImage = portfolioData.filter((currentItem) => {
            return currentItem.category === categoryItem;
        });

        setPorfolioImg(updatedImage);
    }

    const showMoreItem = () => {
        setVisible((prevValue) => prevValue + 6);
    };
    return (
<section className="portfolio-section" style={{padding: "100px 0px" }} id="myProject">
            <Container>
                <div className="myPortfolio">
                    <h1>My Portfolio</h1>
                    <p>Develope by WordPress and React</p>
                </div>

                <div className="text-center ms-0 menu">
                <button className="btn-portfolio project-title menu" onClick={() => setPorfolioImg(portfolioData)}>All</button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('html')}>HTML</button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('javaScript')}>JavaScript</button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('react')}>React</button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('mern')}>MERN</button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('wordpress')}>WordPress</button>
            </div>

                <Row xs={1} sm={2} md={2} lg={3}>
                    {
                       portfolioImg.slice(0, visible).map(portfolio => <MyPortfolioDetails portfolio = {portfolio}></MyPortfolioDetails>)
                    }
                </Row>
                <div className="text-center">
                <Button onClick={showMoreItem} className="showMore-btn" size="lg" style={{ backgroundColor: "#ff9933", color: "#000000", border: "none", marginRight: "10px", width: "160px", marginTop: "25px" }}>Load More</Button>
                </div>
            </Container>

        </section>
    );
};

export default MyPortfolio;