import React from "react"
import styled, { keyframes } from "styled-components"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { AiOutlineFilePdf } from "react-icons/ai"
import PropTypes from "prop-types"

import { Section, StyledContact, StyledSocial } from "../../styles/sharedStyle"
import media from "../../styles/media"

const StyledSection = styled(Section)`
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  padding: ${props => props.theme.space[7]};
  max-width: 1400px;

  ${media.md`
    padding: ${props => props.theme.space[6]};
    align-items: flex-start;
  `};
  ${media.sm`
    padding: 2.5rem;
  `};
  ${media.xs`
    padding: ${props => props.theme.space[4]};
  `}
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

const StyledHand = styled.span`
  animation-name: ${wave};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  margin-left: ${props => props.theme.space[2]};
`

const StyledIntro = styled.h2`
  max-width: 700px;

  > p {
    margin: 0;
    font: inherit;
    line-height: 1.5;
  }
  > p > strong {
    color: #005ec2;
    color: ${props => props.theme.textSpecial};
  }

  ${media.md`
      max-width: 650px;
  `}
`

const StyledContactSpan = styled.span`
  margin-right: ${props => props.theme.space[5]};
  font-weight: 350;
`

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node

  return (
    <StyledSection id="intro">
      <h1>
        {frontmatter.title}
        <StyledHand className="wave">
          <span role="img" aria-label="Waving hand">
            👋
          </span>
        </StyledHand>
      </h1>
      <StyledIntro dangerouslySetInnerHTML={{ __html: html }}></StyledIntro>
      <StyledContact>
        <StyledContactSpan>{frontmatter.contact}</StyledContactSpan>
        <div>
          <StyledSocial
            href="https://github.com/ysun62"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </StyledSocial>
          <StyledSocial
            href="https://www.linkedin.com/in/yanglsun/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
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
            href="/Young-Sun-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
          >
            <AiOutlineFilePdf />
          </StyledSocial>
        </div>
      </StyledContact>
    </StyledSection>
  )
}

Hero.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Hero
