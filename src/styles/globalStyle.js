import { createGlobalStyle } from "styled-components"

import media from "../styles/media"

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        font: 112.5%/1.45em georgia, serif;
        box-sizing: border-box;
        overflow-y: scroll;
    }
    * {
        outline-color: ${props => props.theme.textSpecial};
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: normal;
        word-wrap: break-word;
        font-kerning: normal;
        -moz-font-feature-settings: "kern", "liga", "clig", "calt";
        -ms-font-feature-settings: "kern", "liga", "clig", "calt";
        -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
        font-feature-settings: "kern", "liga", "clig", "calt";
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${props => props.theme.bg};
        color: ${props => props.theme.textNormal};
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
        color: inherit;
        font-weight: 300;
        text-rendering: optimizeLegibility;
        line-height: 1.1;
    }
    h1, h2 {
        font-size: ${props => props.theme.fontSizes.xl[2]};
    }
    h3 {
        font-weight: 700;
        font-size: ${props => props.theme.fontSizes.md[3]};
    }
    h4 {
        font-weight: 600;
    }
    
    ${media.lg`
        h1, h2 {
            font-size: ${props => props.theme.fontSizes.xl[1]};
        }
    `}
    ${media.md`
        h1, h2 {
            font-size: ${props => props.theme.fontSizes.xl[0]};
        }
        h3 {
            font-size: ${props => props.theme.fontSizes.md[1]};
            margin-bottom: ${props => props.theme.space[4]};
        }
    `}
    ${media.sm`
        h1, h2 {
            font-size: ${props => props.theme.fontSizes.lg[2]};
        }
        h3 {
            font-size: ${props => props.theme.fontSizes.md[0]};
        }
    `}
    ${media.xs`
        h1, h2 {
            font-size: ${props => props.theme.fontSizes.lg[0]};
        }
    `}
    ${media.xxs`
        h1, h2 {
            font-size: ${props => props.theme.fontSizes.md[3]};
        }
    `}

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        margin-bottom: ${props => props.theme.space[2]};
    }
    ul li::before {
        content: "▹";
        position: absolute;
        left: 0px;
        color: ${props => props.theme.textSpecial};
    }
    p {
        margin: 0;
        margin-bottom: ${props => props.theme.space[4]};
        padding: 0;
        line-height: 1.5;
    }
    button {
        font: inherit;
        margin: 0;
    }
    a {
        text-decoration: none;
    }
    header .toggler {
        position: fixed;
        right: 4%;
        top: 4%;
        z-index: 200;
        cursor: pointer;

        ${media.sm`
            display: none;
        `}
    }
    .active .dot {
        background: ${props => props.theme.textSpecial};
    }
    svg {
        stroke-width: 1.5;
    }
`
