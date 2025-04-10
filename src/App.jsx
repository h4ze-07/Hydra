import Lenis from 'lenis';
import { useEffect } from 'react';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Hero from "./sections/Hero";
import HowBuild from './sections/HowBuild';
import Intro from "./sections/Intro";
import Technologies from './sections/Technologies';
import WhyBuild from './sections/WhyBuild';

export default function App() {


    useEffect(() => {

        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf);

    }, [])

    return (
        <>
            <Hero />
            <Intro />
            <WhyBuild />
            <Technologies />
            <HowBuild />
            <Contact />
            <Footer />
        </>
    )
}
