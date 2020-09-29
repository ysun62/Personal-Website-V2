const space = [
  "0.25rem", //0
  "0.5rem", //1
  "0.75rem", //2
  "1rem", //3
  "1.5rem", //4
  "2rem", //5
  "3rem", //6
  "4rem", //7
  "6rem", //8
  "8rem", //9
  "12rem", //10
  "16rem", //11
  "24rem", //12
]

const fontSizes = {
  xxs: ["0.5rem", "0.55rem", "0.6rem"],
  xs: ["0.65rem", "0.7rem", "0.75rem"],
  sm: ["0.8rem", "0.9rem", "0.95rem"],
  md: ["1rem", "1.1rem", "1.2rem", "1.3rem"],
  lg: ["1.4rem", "1.5rem", "1.6rem"],
  xl: ["1.8rem", "2rem", "2.2rem"],
  xxl: ["2.3rem", "2.4rem", "2.45rem"],
}

const lightTheme = {
  bg: "rgb(252, 252, 252)",
  btnBg: "#94979925",
  cardBg: "rgb(254, 254, 254)",
  dotBg: "rgba(58, 58, 58, 0.25)",
  sideDrawerBg: "rgba(254, 254, 254, 0.9)",
  sliderBorder: "#0a192f25",
  social: "#000000",
  textLink: "#137591",
  textNormal: "#0a192f",
  textSpecial: "#e1b23a",
  textSubTitle: "#656575",
  textTitle: "#444452",
  space,
  fontSizes,
}

const darkTheme = {
  bg: "#0a192f",
  btnBg: "rgb(23, 42, 69)",
  cardBg: "#172a45",
  dotBg: "rgb(204, 214, 246)",
  sideDrawerBg: "rgba(23, 42, 69, 0.9)",
  sliderBorder: "rgb(201, 210, 238)",
  social: "rgb(201, 210, 238)",
  textLink: "#369ab6",
  textNormal: "rgb(201, 210, 238)",
  textSpecial: "#e1b23a",
  textSubTitle: "rgb(136, 146, 176)",
  textTitle: "rgb(204, 214, 246)",
  space,
  fontSizes,
}

module.exports = {
  lightTheme,
  darkTheme,
}
