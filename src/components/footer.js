import React from "react"
import styled from "styled-components"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { AiOutlineFilePdf } from "react-icons/ai"

import { StyledContact, StyledSocial } from "../styles/sharedStyle"
import mixins from "../styles/mixins"
import media from "../styles/media"

const StyledFooter = styled.footer`
  ${mixins.flexCenter}
  flex-direction: column;
  padding: ${props => props.theme.space[8]} 0 ${props => props.theme.space[6]} 0;

  ${media.sm`
    padding-left: ${props => props.theme.space[4]};
    padding-right: ${props => props.theme.space[4]};
  `}
`

const StyledFooterLink = styled(StyledSocial)`
  margin: 0 10px;
`

const StyledGatsbyLink = styled.a`
  ${mixins.underlineLink}

  &::after {
    bottom: 0px;
  }
`

const StyledMetaData = styled.div`
  text-align: center;
  padding-top: 15px;
  color: ${props => props.theme.textTitle};
  font-size: 0.9rem;
  font-weight: 500;
`

export default function Footer() {
  return (
    <StyledFooter>
      <StyledContact>
        <div>
          <StyledFooterLink
            href="https://github.com/ysun62"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </StyledFooterLink>
          <StyledFooterLink
            href="https://www.linkedin.com/in/yanglsun/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </StyledFooterLink>
          <StyledFooterLink
            href="mailto:ysun9596@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FiMail />
          </StyledFooterLink>
          <StyledFooterLink
            href="/Young-Sun-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
          >
            <AiOutlineFilePdf />
          </StyledFooterLink>
        </div>
      </StyledContact>
      <StyledMetaData>
        Young Sun 2020 - Powered by{" "}
        <StyledGatsbyLink
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </StyledGatsbyLink>{" "}
        <span role="img" aria-label="Heart">
          ❤️
        </span>
      </StyledMetaData>
    </StyledFooter>
  )
}
