import React from "react"
import PropTypes from "prop-types"
import { withTheme } from "styled-components"

import { Header, Footer, Nav, SEO } from "./"
import { GlobalStyle } from "../styles/globalStyle"

const Layout = withTheme(({ children, theme }) => {
  return (
    <>
      <GlobalStyle theme={theme} />
      <SEO />
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
})

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
