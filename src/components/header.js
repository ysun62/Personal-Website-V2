import React from "react"
import "./layout.css"
import { ThemeToggle } from "./"
import useWindowSize from "./hooks/useWindowSize"

const Header = () => {
  const isMobile = useWindowSize()

  return (
    <header>
      {!isMobile && (
        <div className="toggler">
          <ThemeToggle />
        </div>
      )}
    </header>
  )
}

export default Header
