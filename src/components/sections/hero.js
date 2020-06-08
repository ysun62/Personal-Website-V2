import React from "react"
import styled, { keyframes } from "styled-components"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { AiOutlineFilePdf } from "react-icons/ai"
import { StyledContact, StyledLinkWrapper, StyledLink } from "../styles/content"

const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--textNormal);
`

const StyledWrapper = styled.div`
  width: 80vw;
  height: 80vh;
  padding: 50px 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;

  @media (max-width: 1300px) {
    padding: 50px 0;
  }
  @media (max-width: 1024px) {
    padding: 120px 0;
  }
  @media (max-width: 850px) {
  }
`

const StyledTitle = styled.h1`
  font-weight: 300;
  font-size: 2.4rem;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (max-width: 850px) {
    font-size: 2rem;
  }
`
const wave = keyframes`
0% { transform: rotate(  0.0deg) }
10% { transform: rotate(-10.0deg) }
20% { transform: rotate( 12.0deg) }
30% { transform: rotate(-10.0deg) }
40% { transform: rotate(  9.0deg) }
50% { transform: rotate(  0.0deg) }
100% { transform: rotate(  0.0deg) }
`

const StyledTitleSpan = styled.span`
  animation-name: ${wave};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  margin-left: 15px;
`

const StyledSubtitle = styled.h2`
  font-weight: 300;
  max-width: 700px;
  font-size: 2.4rem;

  > p > strong {
    color: #005ec2;
    color: var(--textSpecial);
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (max-width: 850px) {
    font-size: 1.6rem;
  }
`

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node

  return (
    <StyledSection id="intro">
      <StyledWrapper>
        <StyledTitle>
          {frontmatter.title}
          <StyledTitleSpan className="wave">👋</StyledTitleSpan>
        </StyledTitle>
        {
          <StyledSubtitle
            dangerouslySetInnerHTML={{ __html: html }}
          ></StyledSubtitle>
        }
        <StyledContact>
          <span style={{ marginRight: "30px" }}>{frontmatter.contact}</span>
          <StyledLinkWrapper>
            <StyledLink href="https://github.com/ysun62" target="_blank">
              <FaGithub />
            </StyledLink>
            <StyledLink
              href="https://www.linkedin.com/in/yanglsun/"
              target="_blank"
            >
              <FaLinkedinIn />
            </StyledLink>
            <StyledLink href="mailto:ysun9596@gmail.com" target="_blank">
              <FiMail />
            </StyledLink>
            <StyledLink href="#" target="_blank">
              <AiOutlineFilePdf />
            </StyledLink>
          </StyledLinkWrapper>
        </StyledContact>
      </StyledWrapper>
    </StyledSection>
  )
}

export default Hero
