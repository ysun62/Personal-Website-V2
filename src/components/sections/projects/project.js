import React from "react"
import styled from "styled-components"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import PropTypes from "prop-types"

import mixins from "../../../styles/mixins"

const StyledCard = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  min-height: 330px;
  background-color: ${props => props.theme.cardBg};
  color: ${props => props.theme.textNormal};
  padding: ${props => props.theme.space[3]} 1.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  position: relative;
`

const StyledNumbering = styled.div`
  color: ${props => props.theme.textSpecial};
  font-size: 0.9em;
  font-weight: 600;
  margin-bottom: 0.35em;
`

const StyledTitle = styled.h4`
  color: ${props => props.theme.textTitle};
  line-height: 1.2;
  margin-bottom: 0;
  font-size: 1.15em;
`

const StyledTech = styled.div`
  margin-bottom: 1.3rem;
  color: rgba(0, 0, 0, 0.54);
`

const StyledList = styled.ul`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`

const StyledListItem = styled.li`
  color: ${props => props.theme.textSubTitle};
  font-style: italic;
  margin-bottom: -0.4rem;
  font-size: 0.78em;

  &::before {
    content: "";
  }
`

const StyledBody = styled.div`
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
`

const StyledBodyHtml = styled.div`
  color: ${props => props.theme.textNormal};
  font-size: 0.9em;
  padding-bottom: ${props => props.theme.space[3]};

  a {
    ${mixins.underlineLink}

    &::after {
      bottom: 0px;
    }
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

const StyledLink = styled.a`
  color: ${props => props.theme.social};
  margin-left: 0.85rem;
  font-size: 1.3rem;

  > svg {
    vertical-align: middle;
  }
`

export default function Project({ data }) {
  const bullet = <span>•</span>
  const { frontmatter, html } = data.node
  const { numbering, title, github, demo, tech } = frontmatter
  const techLen = tech.length - 1

  return (
    <StyledCard>
      <header>
        <StyledNumbering>{numbering}</StyledNumbering>
        <StyledTitle>{title}</StyledTitle>
        <StyledTech>
          <StyledList>
            {tech.map((t, i) => {
              if (techLen !== i && i !== 0) {
                return (
                  <StyledListItem key={i}>
                    &nbsp;{t} {bullet}
                  </StyledListItem>
                )
              } else if (i === 0) {
                return (
                  <StyledListItem key={i}>
                    {t} {bullet}
                  </StyledListItem>
                )
              } else {
                return <StyledListItem key={i}>&nbsp;{t}</StyledListItem>
              }
            })}
          </StyledList>
        </StyledTech>
      </header>
      <StyledBody>
        <StyledBodyHtml dangerouslySetInnerHTML={{ __html: html }} />
      </StyledBody>
      <StyledFooter>
        <Tippy content="Demo" arrow="">
          {demo && (
            <StyledLink
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Demo"
            >
              <FiExternalLink />
            </StyledLink>
          )}
        </Tippy>
        <Tippy content="Github" arrow="">
          {github && (
            <StyledLink
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </StyledLink>
          )}
        </Tippy>
      </StyledFooter>
    </StyledCard>
  )
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
}
