import { StyledThemeSwitcher } from "./ThemeSwitcher.styled";
import { MdDarkMode } from "react-icons/md";
import { RxSlash } from "react-icons/rx";
import { MdLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  return (
    <StyledThemeSwitcher>
      <button type="button">
        <MdLightMode />
      </button>
      <RxSlash />
      <button>
        <MdDarkMode />
      </button>
    </StyledThemeSwitcher>
  );
};

export default ThemeSwitcher;
