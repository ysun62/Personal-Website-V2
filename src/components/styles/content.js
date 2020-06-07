import styled from "styled-components"

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  //   width: 100vw;
`

export const StyledWrapper = styled.div`
  width: 80vw;
  padding: 120px 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  //   margin-right: 30px;

  @media (max-width: 1024px) {
    // width: 70vw;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 120px 0;
    text-align: left;
  }
  @media (max-width: 850px) {
    // width: 85vw;
  }
`

export const StyledTitle = styled.h5`
  font-weight: 700;
  font-size: 1.5rem;
  padding-right: 70px;
  width: 200px;
  text-align: right;

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
  max-width: 700px;
  font-size: 1.3rem;

  @media (max-width: 1300px) {
    max-width: 600px;
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
`

export const StyledLinkWrapper = styled.div`
  @media (max-width: 850px) {
    margin-top: 10px;
  }
`

export const StyledLink = styled.a`
  margin-right: 25px;
  cursor: pointer;
  font-size: 1.5rem;
  color: black;

  @media (max-width: 850px) {
    font-size: 1.3rem;
  }
`
