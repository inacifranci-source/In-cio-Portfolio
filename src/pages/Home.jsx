import AboutMe from "../components/AboutMe";
import Contact from "../components/contact";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Projects from "../components/Projects";
import Services from "../components/Services";


const Home = () =>{
    return(
        <>
        <Hero/>
        <Marquee/>
        <Projects/>
        <Services/>
        <AboutMe/>
        <Contact/>
        </>
    )
}

export default Home;