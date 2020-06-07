import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h4`
  margin-bottom: 0.2rem;
`

const StyledSub = styled.h5`
  margin-bottom: 0.2rem;
  font-weight: 500;
  font-size: 0.8rem;
`

const StyledTasks = styled.div`
  margin-top: 1.5rem;
  font-size: 1rem;
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
