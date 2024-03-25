import { StyledUsefulLinksPage } from "./UsefulLinksPage.styled";
import UsefulLinksListContainer from "../../components/UsefulLinksPageListContainer/UsefulLinksPageListContainer.styled";
import { UsefulLinksPageData } from "../../data/dataUsefulLinksPage";
import useDataContext from "../../hooks/useDataContext";

const UsefulLinksPage = () => {
  const { language } = useDataContext();

  const col1 = UsefulLinksPageData[`${language}`].linksArray.slice(0, 9);
  const col2 = UsefulLinksPageData[`${language}`].linksArray.slice(9);

  return (
    <StyledUsefulLinksPage>
      <h2>{UsefulLinksPageData[`${language}`].pageTitle}</h2>
      <UsefulLinksListContainer>
        <div>
          {col1.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </li>
          ))}
        </div>
        <div>
          {col2.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </li>
          ))}
        </div>
      </UsefulLinksListContainer>
    </StyledUsefulLinksPage>
  );
};

export default UsefulLinksPage;
