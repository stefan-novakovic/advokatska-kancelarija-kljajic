import { ThemeProvider } from "styled-components";
import { lightModeColors } from "./lightModeColors";
import { darkModeColors } from "./darkModeColors";

export const Theme = ({ children }) => {
  const theme = {
    colors: {
      ...lightModeColors,
      ...darkModeColors,
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
