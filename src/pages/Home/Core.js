import React from 'react';
import HereSection from '../../componets/HeroSection';
import FeaturedSection from '../../componets/FeaturedSection';
import StepsSection from '../../componets/StepsSection';
import ChooseUsSection from '../../componets/ChooseUsSection';
import NewestDealSection from '../../componets/NewestDealSection';
import ConnectedtoAgentSection from '../../componets/ConnectedtoAgentsSection';
import TestimonialsSection from '../../componets/TestMonialsSection';
import FooterSection from '../../componets/FooterSection';

const Core = () => {
  return (
    <div >
      <HereSection />
      <FeaturedSection />
      <StepsSection />
      <ChooseUsSection />
      <NewestDealSection />
      <ConnectedtoAgentSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default Core;
