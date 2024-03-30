import { StyledUsefulLinksPage } from "./UsefulLinksPage.styled";
import UsefulLinksListContainer from "../../components/UsefulLinksPageListContainer/UsefulLinksPageListContainer";
import { UsefulLinksPageData } from "../../data/dataUsefulLinksPage";
import useDataContext from "../../hooks/useDataContext";

const UsefulLinksPage = () => {
  const { language } = useDataContext();

  return (
    <StyledUsefulLinksPage>
      <h2>{UsefulLinksPageData[`${language}`].pageTitle}</h2>
      <UsefulLinksListContainer language={language} />
    </StyledUsefulLinksPage>
  );
};

export default UsefulLinksPage;
