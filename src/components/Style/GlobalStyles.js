import { createGlobalStyle } from "styled-components";
import JosefinSansLight from "../../assets/fonts/JosefinSans-Light.ttf";
import JosefinSansRegular from "../../assets/fonts/JosefinSans-Regular.ttf";
import JosefinSansMedium from "../../assets/fonts/JosefinSans-Medium.ttf";
import JosefinSansSemiBold from "../../assets/fonts/JosefinSans-SemiBold.ttf";
import JosefinSansBold from "../../assets/fonts/JosefinSans-Bold.ttf";

const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: "Josefin Sans";
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    src: url(${JosefinSansLight}) format('truetype'),
  }

    @font-face {
    font-family: "Josefin Sans";
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${JosefinSansRegular}) format('truetype'),
  }

    @font-face {
    font-family: "Josefin Sans";
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: url(${JosefinSansMedium}) format('truetype'),
  }

    @font-face {
    font-family: "Josefin Sans";
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url(${JosefinSansSemiBold}) format('truetype'),
  }

    @font-face {
    font-family: "Josefin Sans";
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url(${JosefinSansBold}) format('truetype'),
  }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    html {
      caret-color: ${({ theme }) => theme.colors.veryLightBlue};
      scrollbar-color: ${({ theme }) => theme.colors.navy} ${({ theme }) =>
  theme.colors.darkNavy};
    }

    body {
      background-color: ${({ theme }) => theme.colors.veryLightBlue};
      font-family: "Josefin Sans", sans-serif;
      font-weight: 600;
      width: 100%;
      min-height: 100vh;
    }

    main {
      display: flex;
      flex-grow: 1;
    }

    input, select {
    color: #fff !important;
    -webkit-text-fill-color: #fff !important;
    -webkit-background-clip: text !important;
    background-clip:  text !important;
  }
`;
export default GlobalStyles;
