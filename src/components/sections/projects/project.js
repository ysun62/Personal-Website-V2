import React from "react"
import styled from "styled-components"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import PropTypes from "prop-types"

import { StyledHtmlLink } from "../../styles/sharedStyle"

const StyledCard = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  min-height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--cardBg);
  color: var(--textNormal);
  padding: 1rem 1.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  margin-bottom: 50px;
  position: relative;
`

const StyledHeader = styled.div``

const StyledNumbering = styled.div`
  color: var(--textSpecial);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.35em;
`

const StyledTitle = styled.h5`
  font-size: 1.4rem;
  color: var(--textTitle);
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 0;
`

const StyledTech = styled.div`
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.54);
`

const StyledList = styled.ul`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const StyledListItem = styled.li`
  font-size: 0.85rem;
  color: var(--textSubTitle);
  font-style: italic;
  margin-bottom: 0;

  &::before {
    content: "";
  }
`

const StyledBody = styled.div`
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  font-size: 0.9rem;
`

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 1rem;
  right: 0.4rem;
`

const StyledLink = styled.a`
  color: var(--social);
  margin-right: 0.85rem;
  font-size: 1.3rem;
`

export default function Project({ data }) {
  const bullet = <span>•</span>
  const { frontmatter, html } = data.node
  const { numbering, title, github, demo, tech } = frontmatter
  const techLen = tech.length - 1

  return (
    <StyledCard>
      <div>
        <StyledHeader>
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
        </StyledHeader>
        <StyledBody>
          <StyledHtmlLink dangerouslySetInnerHTML={{ __html: html }} />
        </StyledBody>
      </div>
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
              <FaGithub />
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
