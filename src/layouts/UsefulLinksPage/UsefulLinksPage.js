import { StyledUsefulLinksPage } from "./UsefulLinksPage.styled";
import UsefulLinksListContainer from "../../components/UsefulLinksPageListContainer/UsefulLinksPageListContainer.styled";
import { usefulLinksArray } from "../../data/data";

const UsefulLinksPage = () => {
  const col1 = usefulLinksArray.slice(0, 9);
  const col2 = usefulLinksArray.slice(9);

  return (
    <StyledUsefulLinksPage>
      <h2>Korisni linkovi</h2>
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
