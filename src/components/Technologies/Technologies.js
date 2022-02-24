import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  ListTechnologies,
  ListTechnologiesItem,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Front-end to Back-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            <ListTechnologies>
              <ListTechnologiesItem>- React</ListTechnologiesItem>
              <ListTechnologiesItem>- Redux</ListTechnologiesItem>
              <ListTechnologiesItem>- Semantic UI</ListTechnologiesItem>
              <ListTechnologiesItem>- HTML</ListTechnologiesItem>
              <ListTechnologiesItem>- CSS</ListTechnologiesItem>
              <ListTechnologiesItem>- JavaScript</ListTechnologiesItem>
            </ListTechnologies>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            <ListTechnologies>
              <ListTechnologiesItem>- Node.js</ListTechnologiesItem>
              <ListTechnologiesItem>- MongoDB</ListTechnologiesItem>
              <ListTechnologiesItem>- Express.js</ListTechnologiesItem>
              <ListTechnologiesItem>- Socket.io</ListTechnologiesItem>
              <ListTechnologiesItem>- Next.js</ListTechnologiesItem>
            </ListTechnologies>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
