import React from "react"
import styled from "styled-components"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { AiOutlineFilePdf } from "react-icons/ai"
import { StyledContact, StyledLinkWrapper, StyledLink } from "./styles/content"

const StyledFooter = styled.footer`
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0 40px 0;
`

const StyledFooterLink = styled(StyledLink)`
  margin: 0 10px;
`

export default function Footer() {
  return (
    <StyledFooter>
      <StyledContact>
        <StyledLinkWrapper>
          <StyledFooterLink href="https://github.com/ysun62" target="_blank">
            <FaGithub />
          </StyledFooterLink>
          <StyledFooterLink
            href="https://www.linkedin.com/in/yanglsun/"
            target="_blank"
          >
            <FaLinkedinIn />
          </StyledFooterLink>
          <StyledFooterLink href="mailto:ysun9596@gmail.com" target="_blank">
            <FiMail />
          </StyledFooterLink>
          <StyledFooterLink target="_blank">
            <AiOutlineFilePdf />
          </StyledFooterLink>
        </StyledLinkWrapper>
      </StyledContact>
      <div
        style={{
          paddingTop: "15px",
          color: "var(--textTitle)",
          fontSize: "0.9rem",
          fontWeight: "500",
        }}
      >
        Young Sun 2020 - Powered by Gatsby ❤️
      </div>
    </StyledFooter>
  )
}
