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

export default function Footer() {
  return (
    <StyledFooter>
      <StyledContact>
        <StyledSocialWrapper>
          <StyledFooterLink
            href="https://github.com/ysun62"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </StyledFooterLink>
          <StyledFooterLink
            href="https://www.linkedin.com/in/yanglsun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </StyledFooterLink>
          <StyledFooterLink
            href="mailto:ysun9596@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail />
          </StyledFooterLink>
          <StyledFooterLink
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
        >
          <span style={{ color: "#532C84" }}>Gatsby</span>
        </a>{" "}
        ❤️
      </div>
    </StyledFooter>
  )
}
