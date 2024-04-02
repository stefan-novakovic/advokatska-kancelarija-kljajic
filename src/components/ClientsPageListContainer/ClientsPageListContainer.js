import { StyledClientsPageListContainer } from "./ClientsPageListContainer.styled";
import { ClientsPageData } from "../../data/dataClientsPage";

const ClientsPageListContainer = ({ language }) => {
  return (
    <StyledClientsPageListContainer>
      {ClientsPageData[`${language}`].namesArray.map((name, index) => (
        <li data-aos="fade-left" key={index}>
          ◈ {name}
        </li>
      ))}
    </StyledClientsPageListContainer>
  );
};

export default ClientsPageListContainer;
