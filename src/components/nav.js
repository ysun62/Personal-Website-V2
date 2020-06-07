import React from "react"
import "./styles/nav.css"
import { Link, animateScroll as scroll } from "react-scroll"

export default function Nav() {
  //   scrollToTop = () => {
  //     scroll.scrollToTop()
  //   }

  return (
    <nav className="nav">
      <ul className="nav-items">
        <li>
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            offset={-120}
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
            offset={-120}
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
            offset={-120}
            smooth={true}
            duration={300}
          >
            <span className="dot"></span>
          </Link>
          <span className="dot-label">Work</span>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            offset={-120}
            smooth={true}
            duration={300}
          >
            <span className="dot"></span>
          </Link>
          <span className="dot-label">Projects</span>
        </li>
        {/* <li></li>   */}
      </ul>
    </nav>
  )
}
