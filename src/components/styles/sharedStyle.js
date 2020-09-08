import styled from "styled-components"

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--textNormal);
`

export const StyledWrapper = styled.div`
  width: 80vw;
  padding: 120px 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1024px) {
    // width: 70vw;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 60px 0 100px 0;
    text-align: left;
  }
  @media (max-width: 850px) {
    padding-bottom: 80px;
  }
`

export const StyledTitle = styled.h5`
  font-weight: 700;
  font-size: 1.5rem;
  padding-right: 70px;
  width: 200px;
  text-align: right;
  color: var(--textSpecial);

  @media (max-width: 1300px) {
    width: 170px;
  }
  @media (max-width: 1024px) {
    font-size: 1.3rem;
    max-width: 500px;
    padding: 0;
    width: 100%;
    text-align: left;
  }
  @media (max-width: 850px) {
    font-size: 1.2rem;
  }
`

export const StyledContent = styled.div`
  font-weight: 300;
  width: 700px;
  font-size: 1.3rem;

  @media (max-width: 1200px) {
    width: 600px;
  }
  @media (max-width: 1024px) {
    // padding-left: 50px;
    max-width: 500px;
    font-size: 1.1rem;
  }
  @media (max-width: 850px) {
    width: 100%;
    font-size: 1rem;
  }
`

export const StyledContact = styled.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  > svg {
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.1rem;
  }
  @media only screen and (min-device-width: 300px) and (max-device-width: 850px) and (orientation: landscape) {
    font-size: 0.95rem;
    flex-direction: row;
    align-items: center;
  }
`

export const StyledSocialWrapper = styled.div`
  @media (max-width: 850px) {
    margin-top: 10px;
  }
`

export const StyledSocial = styled.a`
  margin-right: 25px;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--social);

  @media (max-width: 850px) {
    font-size: 1.3rem;
  }
`

export const StyledLink = styled.a`
  color: var(--textSpecial);
  display: inline-block;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -3px;
    left: 0;
    height: 2px;
    width: 0%;
    background: var(--textSpecial);
  }

  &:hover ::after {
    width: 100%;
    transition: 0.3s ease-in;
  }
`

export const StyledHtmlLink = styled.div`
  color: var(--textNormal);
  a {
    position: relative;
    color: var(--textSpecial);
    display: inline-block;
  }

  a::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 2px;
    width: 0%;
    background: var(--textSpecial);
  }

  a:hover ::after {
    width: 100%;
    transition: 0.2s ease-in;
  }
`
