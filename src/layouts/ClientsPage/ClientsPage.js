import { StyledClientsPage } from "./ClientsPage.styled";
import ClientsListContainer from "../../components/ClientsPageListContainer/ClientsPageListContainer.styled";
import { clientNamesArray } from "../../data/data";

const ClientsPage = () => {
  return (
    <StyledClientsPage>
      <h2>Klijenti</h2>
      <ClientsListContainer>
        {clientNamesArray.map((name, index) => (
          <li key={index}>◈ {name}</li>
        ))}
      </ClientsListContainer>
    </StyledClientsPage>
  );
};

export default ClientsPage;
