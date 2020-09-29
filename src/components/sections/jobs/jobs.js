import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import {
  Section,
  StyledTitle,
  StyledContent,
} from "../../../styles/sharedStyle"
import Job from "./job"
import mixins from "../../../styles/mixins"
import media from "../../../styles/media"

const StyledUl = styled.ul`
  position: relative;
  ${mixins.flexStart}
  min-width: 240px;
  max-width: 550px;
  border-top: 3px solid ${props => props.theme.sliderBorder};
  margin-left: 0;
  margin-bottom: ${props => props.theme.space[3]};

  > li::before {
    content: "";
  }

  ${media.md`
    margin-bottom: ${props => props.theme.space[1]};
  `}
`

const StyledLi = styled.li`
  width: calc(100% / 4);
  cursor: pointer;
  text-align: center;
  font-weight: 400;
  display: inline-block;

  &:hover {
    background: ${props => props.theme.btnBg};
  }
  &:hover > button {
    color: ${props => props.theme.textSpecial};
  }
`

const StyledButton = styled.button`
  cursor: pointer;
  padding: ${props => props.theme.space[0]} 0;
  width: 100%;
  border: none;
  background: none;
  color: ${props =>
    props.index === props.activeTabIndex
      ? props.theme.textSpecial
      : props.theme.textNormal};
`

const StyledLine = styled.span`
  position: absolute;
  top: -3px;
  left: 0;
  height: 3px;
  width: 25%;
  background: ${props => props.theme.textSpecial};
  transition: 0.3s;
  // prettier-ignore
  transform: translateX(${props =>
    props.activeTabIndex > 0 ? props.activeTabIndex * 100 : 0}%);
`

const Jobs = ({ data }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  return (
    <Section id="work">
      <StyledTitle>Experience</StyledTitle>
      <StyledContent>
        <StyledUl aria-label="Job tabs">
          {data.map((d, i) => {
            return (
              <StyledLi
                isActive={activeTabIndex === i}
                activeTabIndex={activeTabIndex}
                key={i}
                onClick={() => setActiveTabIndex(i)}
              >
                <StyledButton index={i} activeTabIndex={activeTabIndex}>
                  <span>{d.node.frontmatter.companyAbbrev}</span>
                </StyledButton>
              </StyledLi>
            )
          })}
          <StyledLine activeTabIndex={activeTabIndex}></StyledLine>
        </StyledUl>
        <Job data={data[activeTabIndex]} />
      </StyledContent>
    </Section>
  )
}

Jobs.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Jobs
