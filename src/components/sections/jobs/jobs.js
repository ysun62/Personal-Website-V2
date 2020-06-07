import React, { useState } from "react"
import styled from "styled-components"
import {
  StyledSection,
  StyledWrapper,
  StyledTitle,
  StyledContent,
} from "../../styles/content"
import Job from "./job"

const StyledUL = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 450px;
  border-top: 3px solid #e6f1ff;
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

  &:hover {
    background: grey;
    color: lightblue;
  }
`

const StyledButton = styled.button`
  cursor: pointer;
  padding: 5px 15px;
  border: none;
  outline: none;
  background: none;

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
  background: #303c55;
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
                  <StyledButton>
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

export default Jobs
