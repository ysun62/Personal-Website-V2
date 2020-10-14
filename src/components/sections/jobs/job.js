import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import mixins from "../../../styles/mixins"

const StyledTitle = styled.h4`
  > a {
    color: ${props => props.theme.textSpecial};
  }
`

const StyledLink = styled.a`
  ${mixins.underlineLink}
`

const StyledSubTitle = styled.h5`
  margin-top: ${props => props.theme.space[0]};
  font-weight: 500;
  color: ${props => props.theme.textSubTitle};
  font-style: italic;
  font-size: 0.75em;
`

const StyledTasks = styled.div`
  position: relative;
  margin-top: ${props => props.theme.space[4]};

  ul {
    margin-left: ${props => props.theme.space[4]};
  }
`

export default function Job(props) {
  const { frontmatter, html } = props.data.node
  const { title, company, location, range, url } = frontmatter

  return (
    <div>
      <StyledTitle>
        {title}{" "}
        <span>
          <StyledLink href={url} target="_blank" rel="noopener noreferrer">
            @ {company}
          </StyledLink>
        </span>
      </StyledTitle>
      <StyledSubTitle>{location}</StyledSubTitle>
      <StyledSubTitle>{range}</StyledSubTitle>
      <StyledTasks>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </StyledTasks>
      {}
    </div>
  )
}

Job.propTypes = {
  data: PropTypes.object.isRequired,
}
