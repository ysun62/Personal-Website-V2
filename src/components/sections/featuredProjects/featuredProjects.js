import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { Section, Title, Content } from "../../../styles/sharedStyle"
import media from "../../../styles/media"
import FeaturedProject from "./featuredProject"

const StyledSection = styled(Section)`
  flex-direction: column;
  align-items: center;
`

const StyledLongTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const StyledTitle = styled(Title)`
  line-height: 1.7rem;
  flex: 1;
  margin-bottom: ${props => props.theme.space[4]};
`

const StyledSpacer = styled.div`
  width: 100%;
  max-width: 650px;
  ${media.lg`
    max-width: 550px;
  `}
  ${media.md`
    width: 0;
    display: none;
  `}
`

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  max-width: none;

  ${media.lg`
    max-width: 800px;
  `}
  ${media.md`
    max-width: 700px;
  `}
  ${media.sm`
    max-width: 600px;
  `}
`

export default function FeaturedProjects({ data }) {
  return (
    <StyledSection id="featured">
      <StyledLongTitleWrapper>
        <StyledTitle>Featured Projects</StyledTitle>
        <StyledSpacer></StyledSpacer>
      </StyledLongTitleWrapper>
      <StyledContent>
        {data.map((d, i) => (
          <FeaturedProject data={d} key={i} />
        ))}
      </StyledContent>
    </StyledSection>
  )
}

FeaturedProjects.propTypes = {
  data: PropTypes.array.isRequired,
}
