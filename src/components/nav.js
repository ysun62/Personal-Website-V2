import React, { useState } from "react"
import "./styles/nav.css"
import { Link } from "react-scroll"
import Burger from "@animated-burgers/burger-rotate"
import "@animated-burgers/burger-rotate/dist/styles.css"

import { SideDrawer } from "./"
import useWindowSize from "./hooks/useWindowSize"

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useWindowSize()

  const toggleBurger = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <>
      {!isMobile && (
        <nav className="desktop-nav">
          <ul className="desktop-nav-items">
            <li>
              <Link
                activeClass="active"
                to="intro"
                spy={true}
                offset={-60}
                smooth={true}
                duration={300}
              >
                <span className="dot"></span>
              </Link>
              <span className="dot-label">Intro</span>
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
                <span className="dot"></span>
              </Link>
              <span className="dot-label">About</span>
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
                <span className="dot"></span>
              </Link>
              <span className="dot-label">Experience</span>
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
                <span className="dot"></span>
              </Link>
              <span className="dot-label">Projects</span>
            </li>
          </ul>
        </nav>
      )}

      {isMobile && (
        <div className="mobileNav-wrapper">
          <Burger isOpen={isOpen} onClick={toggleBurger} />
          <SideDrawer isOpen={isOpen} toggleBurger={toggleBurger} />
        </div>
      )}
    </>
  )
}
