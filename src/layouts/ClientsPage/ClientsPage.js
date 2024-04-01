import { StyledClientsPage } from "./ClientsPage.styled";
import ClientsPageListContainer from "../../components/ClientsPageListContainer/ClientsPageListContainer";
import { ClientsPageData } from "../../data/dataClientsPage";
import useDataContext from "../../hooks/useDataContext";

const ClientsPage = () => {
  const { language } = useDataContext();
  return (
    <StyledClientsPage>
      <h2>{ClientsPageData[`${language}`].pageTitle}</h2>
      <ClientsPageListContainer language={language} />
    </StyledClientsPage>
  );
};

export default ClientsPage;
