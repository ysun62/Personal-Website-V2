import React from "react"
import styled from "styled-components"
import {
  StyledSection,
  StyledWrapper,
  StyledTitle,
  StyledContent,
} from "../styles/content"

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;

  @media (max-width: 310px) {
    grid-template-columns: repeat(1, minmax(140px, 200px));
  }
`

const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 25px;
  display: flex;
  align-items: center;
  font-size: 0.8em;

  &::before {
    content: "▹";
    position: absolute;
    left: 0;

    line-height: 12px;
  }
`

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node
  const { title, skills } = frontmatter

  return (
    <StyledSection id="about">
      <StyledWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <SkillsContainer>
            {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
          </SkillsContainer>
        </StyledContent>
      </StyledWrapper>
    </StyledSection>
  )
}

export default About
