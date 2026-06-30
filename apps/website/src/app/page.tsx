import React from 'react';
import { HeroV2 } from '../components/home/v2/HeroV2';
import { LiveCarousel } from '../components/home/v2/LiveCarousel';
import { HowItWorksV2 } from '../components/home/v2/HowItWorksV2';
import { ValuePropV2 } from '../components/home/v2/ValuePropV2';
import { PricingV2 } from '../components/home/v2/PricingV2';

export default function Home() {
  return (
    <main style={{ background: '#000', color: '#FFF' }}>
      <HeroV2 />
      <LiveCarousel />
      <HowItWorksV2 />
      <ValuePropV2 />
      <PricingV2 />
    </main>
  );
}
