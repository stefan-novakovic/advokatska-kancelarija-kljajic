import { StyledUsefulLinksListContainer } from "./UsefulLinksPageListContainer.styled";
import UsefulLinksPageItemContainer from "./UsefulLinksPageItemContainer";
import { UsefulLinksPageData } from "../../data/dataUsefulLinksPage";

const UsefulLinksPageListContainer = ({ language }) => {
  const column1 = UsefulLinksPageData[`${language}`].linksArray.slice(0, 9);
  const column2 = UsefulLinksPageData[`${language}`].linksArray.slice(9);

  return (
    <StyledUsefulLinksListContainer>
      <UsefulLinksPageItemContainer column={column1} />
      <UsefulLinksPageItemContainer column={column2} />
    </StyledUsefulLinksListContainer>
  );
};

export default UsefulLinksPageListContainer;
