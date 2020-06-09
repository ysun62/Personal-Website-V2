import React from "react"
import PropTypes from "prop-types"

import { Header, Footer, Nav, SEO } from "./"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
