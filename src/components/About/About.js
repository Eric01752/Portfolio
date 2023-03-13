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
        I am a recent graduate of Framingham State University with a bachelor's
        degree in Computer Science. The classes I took at FSU and my desire to
        learn have given me the opportunity to work with many different languages
        including JavaScript, HTML, CSS, and Python. This has enhanced my technical
        knowledge of front-end and back-end web development allowing me to build
        some pretty neat projects! I recently completed an internship as a software
        engineer intern at Waters Corporation where I have learned many things, some
        of which are the programming languages C# and TypeScript as well as agile
        methodologies.
      </SectionText>
    </AboutContainer>
  </Section>
);

export default About;
