import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

function SEO() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )

  const { title, description, siteUrl } = site.siteMetadata

  const themeContext = useContext(ThemeManagerContext)

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          name: "theme-color",
          content: `${themeContext.isDark ? "#0a192f" : "rgb(252, 252, 252)"}`,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: title,
        },
        {
          property: "og:url",
          content: siteUrl,
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  title: "",
  description: "",
  siteUrl: "",
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  siteUrl: PropTypes.string,
}

export default SEO
