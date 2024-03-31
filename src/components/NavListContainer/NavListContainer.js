import { StyledNavListContainer } from "./NavListContainer.styled";
import { NavListItemArray } from "../../data/dataHeader&Footer";
import NavListItem from "./NavListItem";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useDataContext from "../../hooks/useDataContext";

const NavListContainer = () => {
  const location = useLocation();
  const [selectedItemName, setSelectedItemName] = useState("");
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
    setSelectedItemName(pageSelection);
  }, [location]);

  return (
    <StyledNavListContainer>
      {NavListItemArray.map((item) => {
        return (
          <NavListItem
            key={item.name}
            itemName={item.name}
            itemClassName={item.itemClassName}
            link={item.link}
            language={language}
            selectedItemName={selectedItemName}
          />
        );
      })}
    </StyledNavListContainer>
  );
};

export default NavListContainer;
