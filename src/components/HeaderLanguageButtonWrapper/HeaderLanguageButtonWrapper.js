import { StyledHeaderLanguageButtonWrapper } from "./HeaderLanguageButtonWrapper.styled";
import useDataContext from "../../hooks/useDataContext";

const HeaderLanguageButtonWrapper = () => {
  const { language, setLanguage } = useDataContext();

  const handleClick = () => {
    setLanguage(language === "SRB" ? "ENG" : "SRB");
    localStorage.setItem("lang", JSON.stringify(language));
  };

  return (
    <StyledHeaderLanguageButtonWrapper>
      <button type="button" onClick={handleClick}>
        {language}
      </button>
    </StyledHeaderLanguageButtonWrapper>
  );
};

export default HeaderLanguageButtonWrapper;
