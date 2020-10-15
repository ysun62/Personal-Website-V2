import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import ProjectLinks from "../../common/ProjectLinks"
import mixins from "../../../styles/mixins"
import { TechList } from "../../../styles/sharedStyle"

const StyledCard = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  min-height: 330px;
  background-color: ${props => props.theme.cardBg};
  padding: ${props => props.theme.space[3]} 1.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  position: relative;
`

const StyledNumbering = styled.div`
  color: ${props => props.theme.textSpecial};
  font-size: 0.9em;
  font-weight: 600;
`

const StyledTitle = styled.h4`
  line-height: 1.2;
  margin-bottom: 0;
`

const StyledBody = styled.div`
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
`

const StyledBodyHtml = styled.div`
  font-size: 0.9em;
  padding-bottom: 2.5rem;

  a {
    ${mixins.underlineLink}

    &::after {
      bottom: 0px;
    }
  }

  p {
    margin-bottom: ${props => props.theme.space[3]};
  }
`

const StyledFooter = styled.footer`
  position: absolute;
  right: ${props => props.theme.space[3]};
  bottom: ${props => props.theme.space[3]};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Project({ data }) {
  const bullet = <span>•</span>
  const { frontmatter, html } = data.node
  const { numbering, title, github, demo, tech, screenshot } = frontmatter
  const techLen = tech.length - 1

  return (
    <StyledCard>
      <header>
        <StyledNumbering>{numbering}</StyledNumbering>
        <StyledTitle>{title}</StyledTitle>
        <div>
          <TechList>
            {tech.map((t, i) => {
              if (techLen !== i && i !== 0) {
                return (
                  <li key={i}>
                    &nbsp;{t} {bullet}
                  </li>
                )
              } else if (i === 0) {
                return (
                  <li key={i}>
                    {t} {bullet}
                  </li>
                )
              } else {
                return <li key={i}>&nbsp;{t}</li>
              }
            })}
          </TechList>
        </div>
      </header>
      <StyledBody>
        <StyledBodyHtml dangerouslySetInnerHTML={{ __html: html }} />
      </StyledBody>
      <StyledFooter>
        <ProjectLinks demo={demo} github={github} screenshot={screenshot} />
      </StyledFooter>
    </StyledCard>
  )
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
}
