import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import {
  Layout,
  Hero,
  About,
  Jobs,
  FeaturedProjects,
  Projects,
} from "../components"

const IndexPage = ({ data }) => (
  <Layout>
    <Hero data={data.hero.edges} />
    <About data={data.about.edges} />
    <Jobs data={data.work.edges} />
    <FeaturedProjects data={data.featuredProjects.edges} />
    <Projects data={data.projects.edges} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            contact
          }
          html
        }
      }
    }
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            skills
          }
          html
        }
      }
    }
    work: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            companyAbbrev
            company
            location
            range
            url
          }
          html
        }
      }
    }
    featuredProjects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featuredProjects/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            order
            numbering
            title
            image {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            github
            youtube
            demo
            tech
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/otherProjects/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            numbering
            title
            github
            demo
            tech
            screenshot {
              publicURL
            }
          }
          html
        }
      }
    }
  }
`
