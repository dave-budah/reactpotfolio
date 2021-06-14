import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
        <SectionTitle main center>
            Welcome To <br/>
            My Personal Portfolio
        </SectionTitle>
        <SectionText>
            This portfolio serves to showcase some of my projects and well as expertise. I hope you love it.
        </SectionText>
        <Button onClick={() => window.location = '#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
