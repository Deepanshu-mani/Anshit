import React from 'react';
import AboutUs from '../Homepage/AboutUs';
import WhyChooseUs from '../Homepage/WhyChooseUs';

function HeroSec1() {
  return (
    <div className="mt-30 flex flex-col items-center w-full">
      <AboutUs />

      <WhyChooseUs />
    </div>
  );
}

export default HeroSec1;