import { useState, useEffect } from "react"

const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState()

  useEffect(() => {
    window.innerWidth <= 850 ? setIsMobile(true) : setIsMobile(false)

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleResize = () => {
    window.innerWidth <= 850 ? setIsMobile(true) : setIsMobile(false)
  }

  return isMobile
}

export default useWindowSize
