import { NavListItemArray } from "../../data/dataHeader&Footer";
import GenericListItem from "./GenericListItem";
import LanguageListItem from "./LanguageListItem";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu } from "burger-menu";
import "burger-menu/lib/index.css";
import useDataContext from "../../hooks/useDataContext";

const PhoneSidebarMenu = ({ openSidebar, setOpenSidebar }) => {
  const location = useLocation();
  const [selectedItemName, setSelectedItemName] = useState("");
  const { language, setLanguage } = useDataContext();

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

  const handleItemClick = () => {
    setOpenSidebar(false);
  };

  return (
    <Menu
      key="sidebar-menu"
      isOpen={openSidebar}
      onClose={() => setOpenSidebar(false)}
      width={300}
    >
      {NavListItemArray.map((item) => {
        return (
          <GenericListItem
            key={item.name}
            itemName={item.name}
            itemClassName={item.itemClassName}
            link={item.link}
            language={language}
            selectedItemName={selectedItemName}
            handleItemClick={handleItemClick}
          />
        );
      })}
      <LanguageListItem language={language} setLanguage={setLanguage} />
    </Menu>
  );
};

export default PhoneSidebarMenu;
