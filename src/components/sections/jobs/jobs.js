import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { Section, Title, Content } from "../../../styles/sharedStyle"
import Job from "./job"
import media from "../../../styles/media"

const StyledUlContainer = styled.div`
  position: relative;
  min-width: 240px;
  max-width: 550px;
  margin-bottom: ${props => props.theme.space[3]};

  ${media.md`
    margin-bottom: ${props => props.theme.space[1]};
  `}
`

const StyledUl = styled.ul`
  border-top: 3px solid ${props => props.theme.sliderBorder};

  > li::before {
    content: "";
  }
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

const StyledLine = styled.div`
  position: absolute;
  top: 0;
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
      <Title>Experience</Title>
      <Content>
        <StyledUlContainer>
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
          </StyledUl>
          <StyledLine activeTabIndex={activeTabIndex}></StyledLine>
        </StyledUlContainer>
        <Job data={data[activeTabIndex]} />
      </Content>
    </Section>
  )
}

Jobs.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Jobs
