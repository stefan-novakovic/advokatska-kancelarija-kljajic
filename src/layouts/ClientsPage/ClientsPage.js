import { StyledClientsPage } from "./ClientsPage.styled";
import ClientsListContainer from "../../components/ClientsPageListContainer/ClientsPageListContainer.styled";
import { ClientsPageData } from "../../data/dataClientsPage";
import useDataContext from "../../hooks/useDataContext";

const ClientsPage = () => {
  const { language } = useDataContext();
  return (
    <StyledClientsPage>
      <h2>{ClientsPageData[`${language}`].pageTitle}</h2>
      <ClientsListContainer>
        {ClientsPageData[`${language}`].namesArray.map((name, index) => (
          <li key={index}>◈ {name}</li>
        ))}
      </ClientsListContainer>
    </StyledClientsPage>
  );
};

export default ClientsPage;
