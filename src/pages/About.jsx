import React from 'react';
import AboutHero from '../components/about/AboutHero';
import FounderNote from '../components/about/FounderNote';
import VisionPurpose from '../components/about/VisionPurpose';
import PhilosophyValues from '../components/about/PhilosophyValues';
import TransformFramework from '../components/about/TransformFramework';
import TeamGrid from '../components/about/TeamGrid';
import CTASection from '../components/CTASection';

const About = () => {
    return (
        <>
            <AboutHero />
            <FounderNote />
            <VisionPurpose />
            <PhilosophyValues />
            <TransformFramework />
            <TeamGrid />
            <CTASection />
        </>
    );
};

export default About;
