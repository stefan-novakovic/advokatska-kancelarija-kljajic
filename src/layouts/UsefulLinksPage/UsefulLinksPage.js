import { StyledUsefulLinksPage } from "./UsefulLinksPage.styled";
import UsefulLinksListContainer from "../../components/UsefulLinksPageListContainer/UsefulLinksPageListContainer.styled";
import { usefulLinksArray } from "../../data/data";

const UsefulLinksPage = () => {
  return (
    <StyledUsefulLinksPage>
      <h2>Korisni linkovi</h2>
      <UsefulLinksListContainer>
        {usefulLinksArray.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </UsefulLinksListContainer>
    </StyledUsefulLinksPage>
  );
};

export default UsefulLinksPage;
