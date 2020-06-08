import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h4`
  margin-bottom: 0.2rem;
  color: var(--textTitle);
  font-size: 1.1rem;

  > a {
    color: var(--textSpecial);
  }
`

const StyledSub = styled.h5`
  margin-bottom: 0.2rem;
  font-weight: 500;
  font-size: 0.8rem;
  color: var(--textSubTitle);
  font-style: italic;
`

const StyledTasks = styled.div`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: var(--textNormal);
`

export default function Job(props) {
  const { frontmatter, html } = props.data.node
  const { title, company, location, range, url } = frontmatter

  return (
    <div style={{ position: "relative" }}>
      <StyledTitle>
        {title}{" "}
        <a href={url} target="_blank">
          @ {company}
        </a>
      </StyledTitle>
      <StyledSub>{location}</StyledSub>
      <StyledSub>{range}</StyledSub>
      <StyledTasks>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </StyledTasks>
      {}
    </div>
  )
}
