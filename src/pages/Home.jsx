import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Framework from '../components/Framework';
import ProblemSolve from '../components/ProblemSolve';
import MembershipBenefits from '../components/MembershipBenefits';
import Events from '../components/Events';
import Speakers from '../components/Speakers';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Framework />
            <ProblemSolve />
            <MembershipBenefits />
            <Events />
            <Speakers />
            <Testimonials />
            <CTASection />
        </>
    );
};

export default Home;
