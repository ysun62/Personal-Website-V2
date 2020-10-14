import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import ProjectLinks from "../../common/ProjectLinks"
import mixins from "../../../styles/mixins"
import media from "../../../styles/media"
import { TechList } from "../../../styles/sharedStyle"

const StyledProject = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: right;
  margin: ${props => props.theme.space[4]} 0 ${props => props.theme.space[7]};
  position: relative;

  .featured-content-spacing {
    margin-bottom: ${props => props.theme.space[3]};
  }

  &:nth-of-type(even) {
    flex-direction: row-reverse;
    text-align: left;

    .tech-list {
      justify-content: flex-start;

      > li {
        margin-left: 0;
        margin-right: ${props => props.theme.space[2]};
      }
    }
    .project-link {
      margin-left: 0;
      margin-right: ${props => props.theme.space[3]};
    }
    .featured-html {
      padding-left: 0;
      padding-right: ${props => props.theme.space[3]};
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${media.md`
    margin-top: 0;
  `}

  ${media.sm`
    flex-direction: column;

    .featured-content-spacing {
      margin-bottom: ${props => props.theme.space[1]};
    }
    &:nth-of-type(even) {
      flex-direction: column;

      .featured-html {
        padding: 0;
      }
    }
  `}
`

const StyledImgWrapper = styled.div`
  flex-basis: 60%;
  position: relative;

  ${media.sm`
    width: 100%;
    margin-bottom: ${props => props.theme.space[3]};
  `}
`

const StyledContent = styled.div`
  flex-basis: 40%;
`

const StyledTitle = styled.h4`
  > span {
    color: ${props => props.theme.textSpecial};
  }
`

const StyledHtml = styled.div`
  padding-left: ${props => props.theme.space[3]};

  p {
    margin-bottom: 0;
  }

  a {
    ${mixins.underlineLink}

    &::after {
      bottom: 0px;
    }
  }

  ${media.sm`
    padding: 0;
  `}
`

const StyledTechList = styled(TechList)`
  justify-content: flex-end;

  > li {
    margin-left: ${props => props.theme.space[2]};
    margin-bottom: 0;
  }

  ${media.sm`
    margin-bottom: ${props => props.theme.space[1]};
  `}
`

const StyledIframeWrapper = styled.div`
  position: absolute;
  left: 11%;
  top: 4.0415%;
  width: 77.98%;
  height: 84%;
  background: black;
`

const FeaturedProject = ({ data }) => {
  const { frontmatter, html } = data.node
  const { numbering, title, image, github, youtube, demo, tech } = frontmatter

  return (
    <StyledProject>
      <StyledImgWrapper>
        <Img fluid={image.childImageSharp.fluid} alt={title} />
        {youtube && (
          <StyledIframeWrapper>
            <iframe
              src={youtube}
              title={title}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </StyledIframeWrapper>
        )}
      </StyledImgWrapper>
      <StyledContent>
        <StyledTitle className="featured-content-spacing">
          <span>{numbering}</span> {title}
        </StyledTitle>
        <StyledHtml
          className="featured-html featured-content-spacing"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <StyledTechList className="tech-list">
          {tech.map((t, i) => (
            <li key={i} className="tech-list-item">
              {t}
            </li>
          ))}
        </StyledTechList>
        <div>
          <ProjectLinks demo={demo} github={github} />
        </div>
      </StyledContent>
    </StyledProject>
  )
}

export default FeaturedProject

FeaturedProject.propTypes = {
  data: PropTypes.object.isRequired,
}
