import React from 'react';
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
          <LinkColumn>
              <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:000-000-000'>000-000-000</LinkItem>
          </LinkColumn>
          <LinkColumn>
              <LinkTitle>Email</LinkTitle>
              <LinkItem href='mailto:davebudah@gmail.com'>davebudah@gmail.com</LinkItem>
          </LinkColumn>
      </LinkList>
        <SocialIconsContainer>
            <CompanyContainer>
                <Slogan>Never be limited by other people's stories of failure.</Slogan>
            </CompanyContainer>
            <SocialContainer>
                <SocialIcons href="https://github.com/dave-budah" target="_blank">
                    <AiFillGithub size="3rem"/>
                </SocialIcons>
                <SocialIcons href="linkedin.com/in/dave-budah-030216129/" target="_blank">
                    <AiFillLinkedin size="3rem"/>
                </SocialIcons>
                <SocialIcons href="https://facebook.com/dave-budah" target="_blank">
                    <AiFillFacebook size="3rem"/>
                </SocialIcons>
            </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
