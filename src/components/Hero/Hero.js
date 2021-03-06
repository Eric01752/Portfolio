import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Eric Schmidt. Take a look at some of my projects, the
        technologies that I use, and learn a little bit about me!
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
