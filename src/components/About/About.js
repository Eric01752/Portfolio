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
      <SectionText
        style={{
          marginTop: '16px',
          boxShadow: '3px 3px 20px rgba(80, 78, 78, 0.6)',
          paddingRight: '10px',
        }}
      >
        I am a Framingham State University student majoring in Computer Science.
        My past classes and my own experiences have allowed me to work with
        different languages including JavaScript, HTML, CSS, and Python as well
        as gain technical skills in front-end and back-end web development.
      </SectionText>
    </AboutContainer>
  </Section>
);

export default About;
