import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
import Burger from "@animated-burgers/burger-rotate"
import "@animated-burgers/burger-rotate/dist/styles.css"

import { SideDrawer } from "./"
import media from "../styles/media"

const StyledNav = styled.nav`
  position: fixed;
  right: ${props => props.theme.space[4]};
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  ${media.lg`
    right: ${props => props.theme.space[2]};
  `}
`

const StyledUl = styled.ul`
  ${media.sm`
    display: none;
  `};

  > li {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50px;

    &::before {
      content: "";
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  > li > a {
    cursor: pointer;
    max-width: 30px;
    order: 2;

    &:hover {
      transform: scale(1.6);

      + span.dot-label {
        display: block;
        opacity: 1;
        color: ${props => props.theme.textSpecial};
      }
    }
  }
`

const StyledDot = styled.span`
  position: relative;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: ${props => props.theme.dotBg};
  transition: transform 0.2s, background-color 0.5s;
  transform-origin: 50% 50%;
  display: inline-block;
  z-index: 150;
`

const StyledDotLabel = styled.span`
  position: relative;
  top: 3px;
  padding-right: ${props => props.theme.space[2]};
  color: #6e6e6e;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-size: ${props => props.theme.fontSizes.md[0]};
  font-weight: 500;
  text-transform: uppercase;
  display: none;
  opacity: 0;
  transition: transform 0.2s, opacity 0.2s;
  transform-origin: 100% 50%;
  order: 1;
  user-select: none;
`

const StyledMobileNavWrapper = styled.div`
  display: none;

  ${media.sm`
    display: block;
  `}

  .burger {
    position: fixed;
    font-size: ${props => props.theme.fontSizes.xxs[0]};
    right: 1.25rem;
    top: 1.25rem;
    z-index: 200;
  }

  .burger .burger-lines,
  .burger .burger-lines::after,
  .burger .burger-lines::before {
    background: ${props => props.theme.textSpecial};
  }
`

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBurger = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <>
      <StyledNav>
        <StyledUl>
          <li>
            <Link
              activeClass="active"
              to="intro"
              spy={true}
              offset={-60}
              smooth={true}
              duration={300}
            >
              <StyledDot className="dot"></StyledDot>
            </Link>
            <StyledDotLabel className="dot-label">Intro</StyledDotLabel>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              offset={-60}
              smooth={true}
              duration={300}
            >
              <StyledDot className="dot"></StyledDot>
            </Link>
            <StyledDotLabel className="dot-label">About</StyledDotLabel>
          </li>
          <li>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              offset={-60}
              smooth={true}
              duration={300}
            >
              <StyledDot className="dot"></StyledDot>
            </Link>
            <StyledDotLabel className="dot-label">Experience</StyledDotLabel>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              offset={-60}
              smooth={true}
              duration={300}
            >
              <StyledDot className="dot"></StyledDot>
            </Link>
            <StyledDotLabel className="dot-label">Projects</StyledDotLabel>
          </li>
        </StyledUl>
      </StyledNav>
      <StyledMobileNavWrapper>
        <Burger isOpen={isOpen} onClick={toggleBurger} />
        <SideDrawer isOpen={isOpen} toggleBurger={toggleBurger} />
      </StyledMobileNavWrapper>
    </>
  )
}
