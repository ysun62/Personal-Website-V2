import React from "react"
import styled from "styled-components"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { GrDocumentText } from "react-icons/gr"
import { StyledContact, StyledLinkWrapper, StyledLink } from "./styles/content"

const StyledFooter = styled.footer`
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0 30px 30px;
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
            <GrDocumentText />
          </StyledFooterLink>
        </StyledLinkWrapper>
      </StyledContact>
      <div style={{ paddingTop: "7px" }}>Made With ❤️ - Young Sun 2020</div>
    </StyledFooter>
  )
}
