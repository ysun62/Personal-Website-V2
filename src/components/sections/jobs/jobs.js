import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import {
  StyledSection,
  StyledWrapper,
  StyledTitle,
  StyledContent,
} from "../../styles/sharedStyle"
import Job from "./job"

const StyledUL = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 450px;
  border-top: 3px solid var(--sliderBorder);
  margin-left: 0;

  > li::before {
    content: "";
  }
`

const StyledLi = styled.li`
  font-size: 1.3rem;
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  cursor: pointer;
  align-items: center;
  text-align: center;
  font-weight: 400;

  &:hover {
    background: var(--btnBg);
  }
  &:hover > button {
    color: var(--textSpecial);
  }
`

const StyledButton = styled.button`
  cursor: pointer;
  padding: 5px 15px;
  border: none;
  outline: none;
  background: none;
  color: ${props =>
    props.id === props.activeTabIndex
      ? "var(--textSpecial)"
      : "var(--normalText)"};

  @media (max-width: 850px) {
    font-size: 0.85rem;
  }
`

const StyledLine = styled.span`
  position: absolute;
  top: -3px;
  left: 0;
  height: 3px;
  width: 33.333%;
  background: var(--textSpecial);
  transition: 0.3s;
  transform: translateX(
    ${props => (props.activeTabIndex > 0 ? props.activeTabIndex * 100 : 0)}%
  );
`

const Jobs = ({ data }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  return (
    <StyledSection id="work">
      <StyledWrapper>
        <StyledTitle>Experience</StyledTitle>
        <StyledContent>
          <StyledUL>
            {data.map((d, i) => {
              return (
                <StyledLi
                  isActive={activeTabIndex === i}
                  activeTabIndex={activeTabIndex}
                  key={i}
                  onClick={() => setActiveTabIndex(i)}
                >
                  <StyledButton id={i} activeTabIndex={activeTabIndex}>
                    {d.node.frontmatter.companyAbbrev}
                  </StyledButton>
                </StyledLi>
              )
            })}
            <StyledLine activeTabIndex={activeTabIndex}></StyledLine>
          </StyledUL>
          {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
          <Job data={data[activeTabIndex]} />
        </StyledContent>
      </StyledWrapper>
    </StyledSection>
  )
}

Jobs.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Jobs
