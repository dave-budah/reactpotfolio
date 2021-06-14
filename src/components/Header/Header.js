import Link from 'next/link';
import React from 'react';
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
        <Link href="/">
            <a style={{display: "flex", alignItems: "center", color: "white", marginTop: '-18px'}}>
                {/*<DiCssdeck size='3rem'/> <Span>Portfolio</Span>*/}
                <img src="/images/logo.png" alt="" width='50'/>
            </a>
        </Link>
    </Div1>
      <Div2>
          <li>
              <Link href="#projects">
                  <NavLink>Projects</NavLink>
              </Link>
          </li>
          <li>
              <Link href="#tech">
                  <NavLink>Technologies</NavLink>
              </Link>
          </li>
          <li>
              <Link href="#about">
                  <NavLink>About</NavLink>
              </Link>
          </li>

      </Div2>
      <Div3>
          <SocialIcons href="https://github.com/dave-budah" target="_blank">
                <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="linkedin.com/in/dave-budah-030216129/" target="_blank">
              <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://facebook.com/dave-budah" target="_blank">
              <AiFillFacebook size="3rem"/>
          </SocialIcons>
      </Div3>
  </Container>
);

export default Header;
