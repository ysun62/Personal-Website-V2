// import PropTypes from "prop-types"
import React, { useState } from "react"
import Burger from "@animated-burgers/burger-rotate"
import "@animated-burgers/burger-rotate/dist/styles.css"
// import styled from "styled-components"
import "./layout.css"
import ThemeToggle from "./themeToggle"

const Header = ({}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBurger = () => {
    setIsOpen(prevState => !prevState)
  }

  // const Header = styled.header`
  //   background: rebeccapurple;
  //   padding: 1.45rem 1.0875rem;
  //   display: none;

  //   @media (max-width: 768px) {
  //     display: flex;
  //     justify-content: flex-end;
  //   }
  // `

  return (
    <header>
      <div className="toggler">
        <ThemeToggle />
      </div>
      <Burger isOpen={isOpen} className="test" onClick={toggleBurger} />
    </header>
  )
}

Header.propTypes = {
  // siteTitle: PropTypes.string,
}

export default Header
