import React from 'react';
import FrameworkHero from '../components/framework/FrameworkHero';
import FrameworkIntro from '../components/framework/FrameworkIntro';
import TransformModel from '../components/framework/TransformModel';
import FrameworkApplication from '../components/framework/FrameworkApplication';
import CTASection from '../components/CTASection';

const Framework = () => {
    return (
        <div className="bg-white min-h-screen">
            <FrameworkHero />
            <FrameworkIntro />
            <TransformModel />
            <FrameworkApplication />
            <CTASection />
        </div>
    );
};

export default Framework;
