import { css } from "styled-components"

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexAround: css`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,

  flexStart: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,

  flexEnd: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,

  // paddingX: css`
  //   padding-left: ${props => props.space};
  //   padding-right: ${props => props.space};
  // `,

  underlineLink: css`
    position: relative;
    color: ${props => props.theme.textSpecial};
    display: inline-block;

    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      bottom: -3px;
      left: 0;
      height: 2px;
      width: 0%;
      background: ${props => props.theme.textSpecial};
    }

    &:hover ::after {
      width: 100%;
      transition: 0.2s ease-in;
    }
  `,
}

export default mixins
