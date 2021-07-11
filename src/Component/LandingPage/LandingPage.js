import React from 'react';
import SideMenu from '../SideMenu/SideMenu';
import HeroSection from '../HeroSection/HeroSection';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import MainContent from '../MainContent/MainContent';


const LandingPage = () => {
    return (
        <>
        <SideMenu/>
        <HeroSection />
        <MainContent />
        <Footer/>
        <Preloader/>
        </>
    )
}
export default LandingPage;
