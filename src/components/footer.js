import React from "react"
import styled from "styled-components"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { AiOutlineFilePdf } from "react-icons/ai"

import {
  StyledContact,
  StyledSocialWrapper,
  StyledSocial,
} from "./styles/sharedStyle"

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0 40px 0;
`

const StyledFooterLink = styled(StyledSocial)`
  margin: 0 10px;
`

const StyledSpan = styled.span`
  display: inline-block;
  color: #532c84;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -3px;
    left: 0;
    height: 2px;
    width: 0%;
    background: #532c84;
  }

  &:hover ::after {
    width: 100%;
    transition: 0.3s ease-in;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <StyledContact>
        <StyledSocialWrapper>
          <StyledFooterLink
            href="https://github.com/ysun62"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </StyledFooterLink>
          <StyledFooterLink
            href="https://www.linkedin.com/in/yanglsun/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
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
        </StyledSocialWrapper>
      </StyledContact>
      <div
        style={{
          paddingTop: "15px",
          color: "var(--textTitle)",
          fontSize: "0.9rem",
          fontWeight: "500",
        }}
      >
        Young Sun 2020 - Powered by{" "}
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ position: "relative" }}
        >
          <StyledSpan>Gatsby</StyledSpan>
        </a>{" "}
        <span role="img" aria-label="Heart">
          ❤️
        </span>
      </div>
    </StyledFooter>
  )
}
