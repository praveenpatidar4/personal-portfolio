import React from 'react'
import About from '../About/About'
import Facts from '../Facts/Facts'
import Skills from '../Skills/Skills'
import Resume from '../Resume/Resume'
import Portfolio from '../Portfolio/Portfolio'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'

 const MainContent = () => {
    return (
        <main id="main">
            <About />
            <Facts />
            <Skills />
            <Resume />
            <Portfolio />
            <Services />
            <Testimonials />
            <Contact/>
        </main>
    )
}
export default MainContent;
