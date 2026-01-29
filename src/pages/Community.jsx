import React from 'react';
import CommunityHero from '../components/community/CommunityHero';
import HowItWorks from '../components/community/HowItWorks';
import MemberDirectory from '../components/community/MemberDirectory';
import CommunityCTA from '../components/community/CommunityCTA';

const Community = () => {
    return (
        <div className="bg-white min-h-screen">
            <CommunityHero />
            <HowItWorks />
            <MemberDirectory />
            <CommunityCTA />
        </div>
    );
};

export default Community;
