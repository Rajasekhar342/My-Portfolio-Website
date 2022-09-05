import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
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
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:7477753999'>7477753999</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href='mailto:rajasekharbevara341@gmail.com'>
            rajasekharbevara341@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>One step at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            href='https://github.com/Rajasekhar342?tab=repositories'
            target='_blank'
          >
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons
            href='https://linkedin.com/in/rajasekharbevara342'
            target='_blank'
          >
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://instagram.com' target='_blank'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
