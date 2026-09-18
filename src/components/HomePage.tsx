import React from 'react';
import { Hero } from './Hero';
import { ImpactStrip } from './ImpactStrip';
import { PillarsSection } from './PillarsSection';
import { FeaturedProgramsSection } from './FeaturedProgramsSection';
import { HealthCampsSection } from './HealthCampsSection';
import { CommunityImpactSection } from './CommunityImpactSection';
import { TestimonialsSection } from './TestimonialsSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ImpactStrip />
      <PillarsSection />
      <FeaturedProgramsSection />
      <HealthCampsSection />
      <CommunityImpactSection />
      <TestimonialsSection />
    </div>
  );
};
