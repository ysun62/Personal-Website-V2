import React from "react"
import styled, { keyframes } from "styled-components"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { AiOutlineFilePdf } from "react-icons/ai"
import PropTypes from "prop-types"

import {
  StyledContact,
  StyledSocialWrapper,
  StyledSocial,
} from "../styles/sharedStyle"

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
    padding: 0;
  }
  @media only screen and (min-device-width: 300px) and (max-device-width: 850px) and (orientation: landscape) {
    font-size: 0.5rem;
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
  @media only screen and (min-device-width: 300px) and (max-device-width: 850px) and (orientation: landscape) {
    font-size: 1.5rem;
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
  @media only screen and (min-device-width: 300px) and (max-device-width: 850px) and (orientation: landscape) {
    font-size: 1.5rem;
  }
`

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node

  return (
    <StyledSection id="intro">
      <StyledWrapper>
        <StyledTitle>
          {frontmatter.title}
          <StyledTitleSpan className="wave">
            <span role="img" aria-label="Waving hand">
              👋
            </span>
          </StyledTitleSpan>
        </StyledTitle>
        {
          <StyledSubtitle
            dangerouslySetInnerHTML={{ __html: html }}
          ></StyledSubtitle>
        }
        <StyledContact>
          <span style={{ marginRight: "30px" }}>{frontmatter.contact}</span>
          <StyledSocialWrapper>
            <StyledSocial
              href="https://github.com/ysun62"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </StyledSocial>
            <StyledSocial
              href="https://www.linkedin.com/in/yanglsun/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </StyledSocial>
            <StyledSocial
              href="mailto:ysun9596@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FiMail />
            </StyledSocial>
            <StyledSocial
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
            >
              <AiOutlineFilePdf />
            </StyledSocial>
          </StyledSocialWrapper>
        </StyledContact>
      </StyledWrapper>
    </StyledSection>
  )
}

Hero.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Hero
