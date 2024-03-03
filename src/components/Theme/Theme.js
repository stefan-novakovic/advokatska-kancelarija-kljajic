import { ThemeProvider } from "styled-components";
// import { lightModeColors } from "./lightModeColors";
// import { darkModeColors } from "./darkModeColors";

export const Theme = ({ children }) => {
  const theme = {
    colors: {
      white: "#FFF",
      veryLightBlue: "#F2F6F9",
      lightGray: "#9BAB5",
      navy: "#394867",
      darkNavy: "#212A3E",
      black: "#000",
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
