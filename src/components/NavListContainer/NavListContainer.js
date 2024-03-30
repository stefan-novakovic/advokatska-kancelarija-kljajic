import { StyledNavListContainer } from "./NavListContainer.styled";
import NavHomeListItem from "./NavHomeListItem";
import NavAboutUsListItem from "./NavAboutUsListItem";
import NavAreasOfWorkListItem from "./NavAreasOfWorkListItem";
import NavClientsListItem from "./NavClientsListItem";
import NavUsefulLinksListItem from "./NavUsefulLinksListItem";
import NavContactListItem from "./NavContactListItem";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useDataContext from "../../hooks/useDataContext";

const NavListContainer = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("");
  const { language } = useDataContext();

  useEffect(() => {
    const path = location.pathname;
    const pageSelection =
      path === "/"
        ? "pocetna"
        : path.includes("/o-nama")
        ? "o-nama"
        : path === "/oblasti-rada"
        ? "oblasti-rada"
        : path === "/klijenti"
        ? "klijenti"
        : path === "/korisni-linkovi"
        ? "korisni-linkovi"
        : path === "/kontakt"
        ? "kontakt"
        : "";
    setSelectedItem(pageSelection);
  }, [location]);

  return (
    <StyledNavListContainer>
      <NavHomeListItem selectedItem={selectedItem} language={language} />
      <NavAboutUsListItem selectedItem={selectedItem} language={language} />
      <NavAreasOfWorkListItem selectedItem={selectedItem} language={language} />
      <NavClientsListItem selectedItem={selectedItem} language={language} />
      <NavUsefulLinksListItem selectedItem={selectedItem} language={language} />
      <NavContactListItem selectedItem={selectedItem} language={language} />
    </StyledNavListContainer>
  );
};

export default NavListContainer;
