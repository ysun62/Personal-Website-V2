import React, { useState } from "react"
import styled from "styled-components"
import {
  StyledSection,
  StyledWrapper,
  StyledTitle,
  StyledContent,
} from "../../styles/content"
import Project from "./project"

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  position: relative;
  gap: 15px;

  @media (max-width: 350px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`

const Projects = ({ data }) => {
  return (
    <StyledSection id="projects">
      <StyledWrapper>
        <StyledTitle>Projects</StyledTitle>
        <StyledContent>
          <StyledGrid>
            {data.map((d, i) => {
              return <Project data={d} key={i} />
            })}
          </StyledGrid>
        </StyledContent>
      </StyledWrapper>
    </StyledSection>
  )
}

export default Projects
