import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:508-739-5746'>508-739-5746</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:eric.schmidt1350@gmail.com'>
            eric.schmidt1350@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Looking for Internship/Co-op or Full-time job in Web Development
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target='_blank' href='https://github.com/Eric01752'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons
            target='_blank'
            href='https://www.linkedin.com/in/eric-schmidt-web-dev/'
          >
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
