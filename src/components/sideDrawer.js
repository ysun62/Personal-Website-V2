import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"
import PropTypes from "prop-types"

import ThemeToggle from "./themeToggle"

const StyledMenu = styled.nav`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--sideDrawerBg);
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(100%)"};
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  z-index: 50;

  ul {
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 0;
  }

  a {
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    color: var(--textTitle);
    transition: color 0.3s linear;
  }

  .mobile-active {
    color: var(--textSpecial);
  }
`

const StyledToggler = styled.div`
  cursor: pointer;
  position: absolute;
  left: 50%;
  bottom: 20%;
  transform: translate(-50%, -50%);
`

export default function SideDrawer({ isOpen, toggleBurger }) {
  return (
    <StyledMenu className="mobile-nav" isOpen={isOpen}>
      <ul className="mobile-nav-items">
        <li>
          <Link
            activeClass="mobile-active"
            to="intro"
            spy={true}
            offset={-60}
            smooth={true}
            duration={300}
            onClick={toggleBurger}
          >
            <span className="">Intro</span>
          </Link>
        </li>
        <li>
          <Link
            activeClass="mobile-active"
            to="about"
            spy={true}
            offset={-60}
            smooth={true}
            duration={300}
            onClick={toggleBurger}
          >
            <span className="">About</span>
          </Link>
        </li>
        <li>
          <Link
            activeClass="mobile-active"
            to="work"
            spy={true}
            offset={-60}
            smooth={true}
            duration={300}
            onClick={toggleBurger}
          >
            <span className="">Experience</span>
          </Link>
        </li>
        <li>
          <Link
            activeClass="mobile-active"
            to="projects"
            spy={true}
            offset={-60}
            smooth={true}
            duration={300}
            onClick={toggleBurger}
          >
            <span className="">Projects</span>
          </Link>
        </li>
      </ul>
      <StyledToggler>
        <ThemeToggle />
      </StyledToggler>
    </StyledMenu>
  )
}

SideDrawer.propTypes = {
  isOpen: PropTypes.bool,
  toggleBurger: PropTypes.func,
}
