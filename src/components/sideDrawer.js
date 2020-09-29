import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"
import PropTypes from "prop-types"

import { ThemeToggle } from "./"
import mixins from "../styles/mixins"

const StyledNav = styled.nav`
  box-sizing: border-box;
  ${mixins.flexCenter}
  flex-direction: column;
  text-align: center;
  background: ${props => props.theme.sideDrawerBg};
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
    height: 50%;
    ${mixins.flexAround}
    flex-direction: column;
    margin-left: 0;
  }

  a {
    font-size: ${props => props.theme.fontSizes.md[1]};
    font-weight: bold;
    cursor: pointer;
    color: ${props => props.theme.textTitle};
    transition: color 0.3s linear;
  }

  .mobile-active {
    color: ${props => props.theme.textSpecial};
  }
`

const StyledUl = styled.ul`
  > li::before {
    content: "";
  }
`

const StyledToggler = styled.div`
  cursor: pointer;
  position: absolute;
  left: 50%;
  bottom: 8%;
  transform: translate(-50%, -50%);
`

export default function SideDrawer({ isOpen, toggleBurger }) {
  return (
    <StyledNav isOpen={isOpen}>
      <StyledUl>
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
            <span>Intro</span>
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
            <span>About</span>
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
            <span>Experience</span>
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
            <span>Projects</span>
          </Link>
        </li>
      </StyledUl>
      <StyledToggler>
        <ThemeToggle />
      </StyledToggler>
    </StyledNav>
  )
}

SideDrawer.propTypes = {
  isOpen: PropTypes.bool,
  toggleBurger: PropTypes.func,
}
