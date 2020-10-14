import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { Section, Title, Content } from "../../../styles/sharedStyle"
import Project from "./project"

const StyledTitle = styled(Title)`
  line-height: 1.7rem;
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  position: relative;
  gap: 15px;
`

const Projects = ({ data }) => {
  return (
    <Section id="projects">
      <StyledTitle>Other Projects</StyledTitle>
      <Content>
        <StyledGrid>
          {data.map((d, i) => (
            <Project data={d} key={i} />
          ))}
        </StyledGrid>
      </Content>
    </Section>
  )
}

Projects.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Projects
