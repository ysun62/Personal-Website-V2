import { css } from "styled-components"

const breakpoints = {
  xxs: 360,
  xs: 480,
  sm: 800,
  md: 1024,
  lg: 1200,
  xl: 1400,
}

// https://tobbelindstrom.com/blog/how-to-create-a-breakpoint-mixin-with-styled-components/
const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media only screen and (max-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export default media
