import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import Nav from "./nav"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
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
