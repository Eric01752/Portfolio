import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from '../../styles/GlobalComponents';
import { AboutContainer, SelfImage } from './AboutStyles';

const About = () => (
  <Section id='about'>
    <SectionDivider />
    <SectionTitle main>About Me</SectionTitle>
    <AboutContainer>
      <SelfImage src='/images/EricSchmidtPicture.jpg' />
      <SectionText>
        I am a Framingham State University student majoring in Computer Science.
        My past classes and my desire to learn have given me the opportunity to
        work with many different languages including JavaScript, HTML, CSS, and
        Python. This has enhanced my technical knowledge of front-end and
        back-end web development allowing me to build some pretty neat projects!
      </SectionText>
    </AboutContainer>
  </Section>
);

export default About;
