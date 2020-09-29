import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { Section, StyledTitle, StyledContent } from "../../styles/sharedStyle"
import media from "../../styles/media"

const StyledSkills = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));

  ${media.xxs`
    grid-template-columns: repeat(1, minmax(140px, 200px));
  `}
`

const StyledSkill = styled.li`
  position: relative;
  margin-bottom: ${props => props.theme.space[1]};
  padding-left: ${props => props.theme.space[4]};
  display: flex;
  align-items: center;
  font-size: 85%;
`

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node
  const { title, skills } = frontmatter

  return (
    <Section id="about">
      <StyledTitle>{title}</StyledTitle>
      <StyledContent>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <StyledSkills>
          {skills &&
            skills.map((skill, i) => (
              <StyledSkill key={i}>{skill}</StyledSkill>
            ))}
        </StyledSkills>
      </StyledContent>
    </Section>
  )
}

About.propTypes = {
  data: PropTypes.array.isRequired,
}

export default About
