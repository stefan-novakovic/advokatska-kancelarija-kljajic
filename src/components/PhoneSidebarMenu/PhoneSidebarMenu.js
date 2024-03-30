import HomeListItem from "./HomeListItem";
import AboutUsListItem from "./AboutUsListItem";
import AreasOfWorkListItem from "./AreasOfWorkListItem";
import ClientsListItem from "./ClientsListItem";
import UsefulLinksListItem from "./UsefulLinksListItem";
import ContactListItem from "./ContactListItem";
import LanguageListItem from "./LanguageListItem";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu } from "burger-menu";
import "burger-menu/lib/index.css";
import useDataContext from "../../hooks/useDataContext";

const PhoneSidebarMenu = ({ openSidebar, setOpenSidebar }) => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("");
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
    setSelectedItem(pageSelection);
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
      <HomeListItem
        selectedItem={selectedItem}
        language={language}
        handleItemClick={handleItemClick}
      />

      <AboutUsListItem
        selectedItem={selectedItem}
        language={language}
        handleItemClick={handleItemClick}
      />

      <AreasOfWorkListItem
        selectedItem={selectedItem}
        language={language}
        handleItemClick={handleItemClick}
      />

      <ClientsListItem
        selectedItem={selectedItem}
        language={language}
        handleItemClick={handleItemClick}
      />

      <UsefulLinksListItem
        selectedItem={selectedItem}
        language={language}
        handleItemClick={handleItemClick}
      />

      <ContactListItem
        selectedItem={selectedItem}
        language={language}
        handleItemClick={handleItemClick}
      />

      <LanguageListItem language={language} setLanguage={setLanguage} />
    </Menu>
  );
};

export default PhoneSidebarMenu;
