import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import {
  Section,
  StyledTitle,
  StyledContent,
} from "../../../styles/sharedStyle"
import Project from "./project"

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  position: relative;
  gap: 15px;
`

const Projects = ({ data }) => {
  return (
    <Section id="projects">
      <StyledTitle>Projects</StyledTitle>
      <StyledContent>
        <StyledGrid>
          {data.map((d, i) => {
            return <Project data={d} key={i} />
          })}
        </StyledGrid>
      </StyledContent>
    </Section>
  )
}

Projects.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Projects
