import styled from "styled-components"

import mixins from "./mixins"
import media from "./media"

export const Section = styled.section`
  ${mixins.flexCenter}
  align-items: flex-start;
  padding: ${props => props.theme.space[8]} ${props => props.theme.space[6]};
  margin: 0 auto;
  max-width: 1100px;

  ${media.lg`
  /* max-width: 900px; */
    /* padding-left: 0;
    padding-right: 0; */
  `}
  ${media.md`
    flex-direction: column;
    align-items: center;
    padding: ${props => props.theme.space[7]};
  `}
  ${media.sm`
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  `}
  ${media.xs`
    padding: ${props => props.theme.space[6]} ${props => props.theme.space[4]};
  `}
`

export const Title = styled.h3`
  padding-right: 70px;
  width: 253px;
  max-width: 253px;
  text-align: right;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${props => props.theme.textSpecial};

  ${media.md`
    min-width: unset;
    padding: 0;
    max-width: 550px;
    width: 100%;
    text-align: left;
  `}
`

export const Content = styled.div`
  width: 100%;
  font-weight: 300;
  max-width: 650px;
  font-size: ${props => props.theme.fontSizes.md[0]};

  ${media.lg`
    max-width: 550px;
  `}
  ${media.md`
    font-size: ${props => props.theme.fontSizes.sm[2]};
  `}
  ${media.sm`
    font-size: ${props => props.theme.fontSizes.sm[1]};
  `}
`

export const Contact = styled.div`
  font-size: ${props => props.theme.fontSizes.lg[0]};
  ${mixins.flexCenter}

  ${media.md`
    font-size: ${props => props.theme.fontSizes.md[2]};

    > div > a {
      font-size: ${props => props.theme.fontSizes.lg[0]};
    }
  `}
  ${media.sm`
    flex-direction: column;
    align-items: flex-start;
    font-size: ${props => props.theme.fontSizes.md[0]};
    
    > span {
      margin-right: 0;
      margin-bottom: ${props => props.theme.space[1]};
    }
    > div > a {
      font-size: ${props => props.theme.fontSizes.md[3]};
    }
  `}
  ${media.xxs`
    font-size: ${props => props.theme.fontSizes.sm[2]};

    > div > a {
      font-size: ${props => props.theme.fontSizes.md[2]};
    }
  `}
`

export const Social = styled.a`
  margin-right: 25px;
  cursor: pointer;
  color: ${props => props.theme.social};
`

export const TechList = styled.ul`
  color: rgba(0, 0, 0, 0.54);
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.space[3]};

  > li {
    color: ${props => props.theme.textSubTitle};
    margin-bottom: -0.4rem;
    font-style: italic;
    font-size: 0.78em;

    &::before {
      content: "";
    }
  }
`
