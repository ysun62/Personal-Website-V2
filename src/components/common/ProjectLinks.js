import React from "react"
import styled from "styled-components"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import { FiGithub, FiExternalLink } from "react-icons/fi"

const StyledLink = styled.a`
  color: ${props => props.theme.social};
  margin-left: ${props => props.theme.space[3]};
  font-size: 1.3rem;

  > svg {
    vertical-align: middle;
  }
`

export default function ProjectLinks({ demo, github, screenshot }) {
  return (
    <>
      <Tippy content="Demo" arrow="">
        {demo || screenshot ? (
          <StyledLink
            href={demo || screenshot.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Demo"
            className="project-link"
          >
            <FiExternalLink />
          </StyledLink>
        ) : null}
      </Tippy>
      <Tippy content="Github" arrow="">
        {github && (
          <StyledLink
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="project-link"
          >
            <FiGithub />
          </StyledLink>
        )}
      </Tippy>
    </>
  )
}
