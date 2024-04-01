import { ThemeProvider } from "styled-components";

export const Theme = ({ children }) => {
  const theme = {
    colors: {
      white: "#fff",
      veryLightBlue: "#f2f6f9",
      navy: "#394867",
      darkNavy: "#212a3e",
      black: "#000",
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
