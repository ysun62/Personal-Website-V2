import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const ThemeToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <>
          {theme === "light" ? (
            <button onClick={() => toggleTheme("dark")}>Sun</button>
          ) : (
            <button onClick={() => toggleTheme("light")}>Moon</button>
          )}
        </>
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle
