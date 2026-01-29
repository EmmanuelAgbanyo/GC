import React from 'react';
import ImpactHero from '../components/impact/ImpactHero';
import ImpactStats from '../components/impact/ImpactStats';
import SpeakerGrid from '../components/impact/SpeakerGrid';
import ImpactCTA from '../components/impact/ImpactCTA';

const HallOfImpact = () => {
    return (
        <div className="bg-white min-h-screen">
            <ImpactHero />
            <ImpactStats />
            <SpeakerGrid />
            <ImpactCTA />
        </div>
    );
};

export default HallOfImpact;
