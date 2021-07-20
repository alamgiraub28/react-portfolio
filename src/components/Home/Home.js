import React from 'react';
import AboutMe from '../AboutMe/AboutMe'
import HeaderArea from '../HeaderArea/HeaderArea';
import NavigationBar from '../NavBar/NavigationBar';
import SkillBar from '../SkillBar/SkillBar';
import MyService from '../MyService/MyService';
import MyPortfolio from '../MyPortfolio/MyPortfolio';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <NavigationBar/>
            <HeaderArea/>
            <AboutMe/>
            <SkillBar/>
            <MyService/>
            <MyPortfolio/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;